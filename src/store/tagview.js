export default {
    namespaced: true,
    state: {
        allVisitedTags: [],
    },
    mutations: {
        addVisitedTags(state,newData){
            const newArr = state.allVisitedTags
            const item_index = newArr.findIndex(e => e.path == newData.path)

            if(item_index == -1){
                if(newArr.length <= 10){
                    newArr.push(newData);
                    state.allVisitedTags = newArr;
                }else{
                    newArr.splice(0,1);
                    newArr.push(newData);
                    state.allVisitedTags = newArr
                }
            }else{
                newArr.splice(item_index,1,newData)
            }
        },
        delVisitedTags(state,newData){
            const newArr = state.allVisitedTags
            const item_index = newArr.findIndex(e => e.path == newData.path)

            newArr.splice(item_index,1);

            state.allVisitedTags = newArr
        },
        clearVisitedTags(state,newData){
            const newArr = [];
            state.allVisitedTags = newArr
        }
    }
}