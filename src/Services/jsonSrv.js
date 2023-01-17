import httpCommon from "../httpCommon";
class jsonSrv {
    post(pageName, data) {
        return httpCommon.post(pageName, data);
    }
    get(pageName) {
        return httpCommon.get(pageName);
    }
}
export default new jsonSrv();
