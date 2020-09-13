import axios from "axios";

export default {

    register( userData ) {

        return axios.post("/api/register", userData);

    },

    login( userData ) {

        return axios.post("/api/login", userData);

    },

    authenticated() {

        return axios.post("/api/authenticated");

    },

    createActivity(data){

        return axios.post("/api/activity/", data);

    },

    deleteActivity(activityId){
        
        return axios.delete("/api/activity/" + activityId);

    },

    addChildren(data){

        return axios.post("/api/children/", data);

    },

    deleteChildren(childId){

        return axios.delete("/api/children/" + childId);

    },

    createReward(childId, data){

        return axios.post("/api/children/" + childId + "/rewards", data);
    },

    deleteReward(childId, rewardId){

        return axios.delete("/api/children/" + childId + "/" + rewardId);
    },

    
    redeemReward(childId, rewardId){

        return axios.put("/api/children/" + childId + "/" + rewardId + "/redeem", {});

    },
    
    addPoint(childID, data){
        console.log(`/api/children/${childID}/points`)
        return axios.put(`/api/children/${childID}/points`, data)
    }

}