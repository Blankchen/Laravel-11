var PpSelect = {
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
                this.$emit("input", newOptions);
            } else {
                let = newOptions = ["_all_"];
                this.ppValue = newOptions;
                this.$emit("input", newOptions);
            }
        },
        reverseAll() {
            this.handleChange(this.formatList.map(item => item.value).filter(item => {
                return this.ppValue.indexOf(item) === -1
            }))
        },
        visibleChange(val) {
            this.$emit("visible-change", val);
        },
    },
};

