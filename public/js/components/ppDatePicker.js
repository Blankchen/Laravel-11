var PpDatePicker = {
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
