import httpCommon from "../http-common";
class profileSrv{
    profileInfo(data){
        return httpCommon.post("users/profile.php",data);
    }
    userPosts(data){
        return httpCommon.post("/article.php",data);
    }
}

export default new profileSrv();