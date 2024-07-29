var PpCustomColumns = {
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
