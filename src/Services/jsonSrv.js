import httpCommon from "../httpCommon";
class jsonSrv {
    post(pageName, data) {
        // data = JSON.stringify(data);
        return httpCommon.post(pageName, data);
    }
}
export default new jsonSrv();
