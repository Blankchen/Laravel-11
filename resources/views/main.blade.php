@extends('common.master')
@section('content')
<div id="main_page">
    <Page></Page>
    {{-- <el-row>
        <el-col :span="24">
            @{{ date }}
            <pp-date-picker v-model="date"></pp-date-picker>
        </el-col>
        <el-col :span="24">
            @{{ select }}
            <pp-select v-model="select" :list="[1,2,3,4,5,6]"></pp-select>
        </el-col>
        <el-col :span="24">
            <el-pagination
                v-model:current-page="pagination.page"
                v-model:page-size="pagination.size"
                :page-sizes="pagination.sizeList"
                :total="pagination.total"
                layout="sizes, total, prev, pager, next, jumper"
            />
        </el-col>
    </el-row>
    <el-button>@{{ message }}</el-button> --}}
</div>
{{--
<script>
    const Page = {
        data() {
        return {
            date: '',
            select: '',
            message: "Hello Element Plus",
            pagination: {
                page: 1,
                total: 0,
                size: 50,
                sizeList: [25, 50, 75, 100, 200]
            },
        };
        },
        methods: {
            toggleCollapse() {
                this.isCollapse = !this.isCollapse
            }
        }
    };
    const page = Vue.createApp(Page);
    page.use(ElementPlus);
    page.use(ppPlugin);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        page.component(key, component)
    }
    page.mount("#main_page");
</script> --}}
@endsection
