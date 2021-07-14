<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentTagView: 0,
    };
  },
  created() {
    this.dealRoute(this.$route);

    this.$router.beforeEach((to, from, next) => {
      if (to.meta.menuId && to.meta.menuId !== this.allTagsArr[0].meta.menuId) {
        this.$store.commit("tagView/clearVisitedTags");
        this.dealRoute(to);
      } else {
        this.dealRoute(to);
      }
      console.log(to.meta);
      next();
    });
  },
  methods: {
    dealRoute(itemObj) {
      const cutOutIndex = itemObj.path.indexOf("{");
      const cutOutIndex_02 = itemObj.path.indexOf("%");
      const index_finally =
        cutOutIndex > cutOutIndex_02 ? cutOutIndex : cutOutIndex_02;

      const routePath =
        index_finally == -1
          ? itemObj.path
          : itemObj.path.substring(0, index_finally - 1);

      const routerObj = {
        path: routePath,
        params: itemObj.params,
        query: itemObj.query,
        meta: itemObj.meta,
        name: itemObj.name,
      };
      this.$store.commit("tagView/addVisitedTags", routerObj);
      this.currentTagView = this.allTagsArr.findIndex(
        (e) => e.path == routePath
      );
    },
  },

  allTagsArr: {
    get() {
      return this.$store.state.tagView.allVisitedTags;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
