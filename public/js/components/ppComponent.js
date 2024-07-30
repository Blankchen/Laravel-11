const ppPlugin = {
    install(app, options) {
        // configure the app
        app.component('PpCustomColumns', PpCustomColumns);
        app.component('PpDatePicker', PpDatePicker);
        app.component('PpSelect', PpSelect);
    }
}

const PpSelect = {
    name: "PpSelect",
    template: `
    <el-select v-model="ppValue" multiple filterable :collapse-tags="collapseTags" @change="handleChange" @visible-change="visibleChange">
        <div style="padding: 4px 15px 8px 15px;">
            <el-button
                type="primary"
                size="small"
                :disabled="ppValue.indexOf('_all_') !== -1"
                @click="reverseAll"
            >Exclude
            </el-button>
        </div>
        <el-option
        :label="'All(' + list.length + ')'"
        value="_all_">
        </el-option>
        <el-option v-for="option in formatList" :key="option.value" :label="option.label" :value="option.value"></el-option>
    </el-select>
`,
    props: {
        value: {
            required: true,
        },
        list: {
            type: Array,
            default: [],
        },
        collapseTags: {
            type: Boolean,
            default: true,
        },
        valueName: {
            type: String,
            default: "value",
        },
        labelName: {
            type: String,
            default: "lable",
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            ppValue: this.value || ["_all_"],
        };
    },
    computed: {
        //ppValue: function () {
        //  return this.value || ['_all_']
        //},
        formatList: function () {
            let _this = this;
            return this.list.map(function (item) {
                if (typeof item !== "object") {
                    return { value: item, label: item };
                } else if (
                    item instanceof Object &&
                    !(item instanceof Array) &&
                    !(item instanceof Function)
                ) {
                    let valueName = _this.valueName;
                    let labelName = _this.labelName;
                    return {
                        value: item[valueName],
                        label: item[labelName],
                    };
                } else {
                    alert("list error");
                    return {};
                }
            });
        },
    },
    methods: {
        handleChange(options) {
            if (options.length) {
                let newOptions =
                    options[options.length - 1] !== "_all_"
                        ? options.filter((item) => {
                                return item !== "_all_";
                            })
                        : ["_all_"];

                this.ppValue = newOptions;
                this.$emit("update:modelValue", newOptions);
            } else {
                let = newOptions = ["_all_"];
                this.ppValue = newOptions;
                this.$emit("update:modelValue", newOptions);
            }
        },
        reverseAll() {
            const newOptions = this.formatList.map(item => item.value).filter(item => {
                return this.ppValue.indexOf(item) === -1
            })
            this.handleChange(newOptions)
        },
        visibleChange(val) {
            this.$emit("visible-change", val);
        },
    },
};


const PpDatePicker = {
    name: "PpDatePicker",
    template: `
    <el-date-picker
        v-model="ppValue"
        type="daterange"
        range-separator="-"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :clearable="false"
        :editable="false"
        @change="handleChange"
        @focus="handleFocus"
        :disabled-date="pickerOptions.disabledDate"
        :shortcuts="pickerOptions.shortcuts">
    </el-date-picker>
`,
    props: {
        value: {
            required: true,
        },
        shortcut_all: {
            required: false,
            default: false,
        },
        disabled_date_begin: {
            required: false,
            default: null,
        },
        disabledDateEnd: {
            required: false,
            default: Date.now(),
        },
        limitDay: {
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            ppValue: this.value,
            pickerMinDate: "", //第一次选中的时间
            pickerOptions: {
                onPick: (obj) => {
                    PpDatePicker.pickerMinDate = new Date(
                        obj.minDate
                    ).getTime();
                },
                disabledDate: (time) => {
                    if (PpDatePicker.pickerMinDate && this.limitDay) {
                        const day1 = this.limitDay * 24 * 3600 * 1000;
                        let maxTime = PpDatePicker.pickerMinDate + day1;
                        let minTime = PpDatePicker.pickerMinDate - day1;
                        return (
                            (this.disabled_date_begin &&
                                time.getTime() <
                                    this.disabled_date_begin) ||
                            time.getTime() > this.disabledDateEnd ||
                            time.getTime() > maxTime ||
                            time.getTime() < minTime
                        );
                    } else {
                        if (this.disabled_date_begin) {
                            if (
                                time.getTime() < this.disabled_date_begin ||
                                time.getTime() > this.disabledDateEnd
                            ) {
                                return true;
                            } else {
                                return false;
                            }
                        } else {
                            return time.getTime() > this.disabledDateEnd;
                        }
                    }
                },
                shortcuts: [
                    {
                        text: "Today",
                        value() {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime()
                            );
                            end.setTime(
                                end.getTime()
                            );
                            return [start, end];
                        },
                    },
                    {
                        text: "Yesterday",
                        value() {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 1
                            );
                            end.setTime(
                                end.getTime() - 3600 * 1000 * 24 * 1
                            );
                            return [start, end];
                        },
                    },
                    {
                        text: "Past 7 Days",
                        value() {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 7
                            );
                            return [start, end];
                        },
                    },
                    {
                        text: "Past 30 Days",
                        value() {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 30
                            );
                            return [start, end];
                        },
                    },
                    {
                        text: "Past 90 Days",
                        value() {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 90
                            );
                            return [start, end];
                        },
                    },
                    {
                        text: "Last Q1",
                        value() {
                            const thisYear = new Date().getFullYear();
                            // 2023-01-01 - 2023-03-31
                            const start = new Date(thisYear - 1, 0, 1);
                            const end = new Date(thisYear - 1, 2, 31);
                            return [start, end];
                        },
                    },
                    {
                        text: "Last Q2",
                        value() {
                            const thisYear = new Date().getFullYear();
                            // 2023-04-01 - 2023-06-30
                            const start = new Date(thisYear - 1, 3, 1);
                            const end = new Date(thisYear - 1, 5, 30);
                            return [start, end];
                        },
                    },
                    {
                        text: "Last Q3",
                        value() {
                            const thisYear = new Date().getFullYear();
                            // 2023-07-01 - 2023-09-30
                            const start = new Date(thisYear - 1, 6, 1);
                            const end = new Date(thisYear - 1, 8, 30);
                            return [start, end];
                        },
                    },
                    {
                        text: "Last Q4",
                        value() {
                            const thisYear = new Date().getFullYear();
                            // 2023-10-01 - 2023-12-31
                            const start = new Date(thisYear - 1, 9, 1);
                            const end = new Date(thisYear - 1, 11, 31);
                            return [start, end];
                        },
                    },
                ],
            },
        };
    },
    created: function () {
        //添加所有日期选项
        if (this.shortcut_all == true) {
            this.pickerOptions.shortcuts.push({
                text: "All",
                value() {
                    return ["", ""];
                },
            });
        }
    },
    watch: {
        ppValue: function (newVal) {
            this.$emit("input", newVal);
        },
    },
    methods: {
        handleChange: function (val) {
            this.$emit("change", val);
        },
        handleFocus: function () {
            PpDatePicker.pickerMinDate = "";
        },
    },
};

const PpCustomColumns = {
    name: "PpCustomColumns",
    template: `
        <el-dialog custom-class="__custom_column" title="Custom Columns" :visible.sync="show_custom_columns_visible" height="">
            <div class="edit-club-info" style="max-height:500px; overflow-y:auto; width:100%; padding:2px;">
                <el-form v-loading="custom_columns_lock" label-position="left" label-width="260px"  size="small">
                    <el-form-item v-for="column in custom_columns" :label="column.label">
                        <el-checkbox v-model="column.checked"></el-checkbox>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <div v-loading="custom_columns_lock">
                    <el-button size="small" @click="handleDoCustomColumns('cancel')">Cancel</el-button>
                    <el-button size="small" type="primary" @click="handleDoCustomColumns('ok')">Submit</el-button>
                </div>
            </span>
        </el-dialog>
    `,
    props: {
        custom_columns_visible: { type: Number, default: 0 },
        custom_columns: { type: Array, default: [] },
    },
    data() {
        return {
            show_custom_columns_visible: false,
            custom_columns_lock: false,
        };
    },
    watch: {
        custom_columns: function (newData, oldData) {},
        custom_columns_visible: function (newData, oldData) {
            this.show_custom_columns_visible = newData >= 1 ? true : false;
        },
    },
    methods: {
        handleDoCustomColumns: function (type) {
            this.custom_columns_visible = 0;
            this.$emit("handlechange", this.custom_columns_visible);
            if (type == "cancel") {
                return;
            }

            //提交到服务器
            column_info = [];
            for (i = 0; i < this.custom_columns.length; i++) {
                column_info[this.custom_columns[i]["key"]] = this
                    .custom_columns[i]["checked"]
                    ? 1
                    : 0;
            }
            column_info = poker.querysStr(column_info);
            var param = {};
            param["column_info"] = column_info;
            param["uri"] = location.pathname;

            poker
                .post("/common/do_show_column", param)
                .done(function (data) {
                    poker.success("Success");
                })
                .fail(function (er) {
                    poker.error(er.message);
                })
                .always(function () {});
        },
    },
    mounted: function () {},
    created: function () {},
};
