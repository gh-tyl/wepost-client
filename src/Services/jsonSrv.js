import httpCommon from "../httpCommon";
class jsonSrv {
    post(pageName, data) {
        return httpCommon.post(pageName, data);
    }
}
export default new jsonSrv();
