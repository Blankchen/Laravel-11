<el-header>
    <div class="toggle" @click="toggleCollapse">
        <el-icon :size="20"><Expand /></el-icon>
    </div>
<div class="toolbar">
    <el-dropdown>
    <el-icon :size="20" style="margin-right: 8px; margin-top: 1px">
        <setting />
    </el-icon>
    <template #dropdown>
        <el-dropdown-menu>
        <el-dropdown-item>View</el-dropdown-item>
        <el-dropdown-item>Add</el-dropdown-item>
        <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
    </template>
    </el-dropdown>
    <span>Tom</span>
</div>
</el-header>
