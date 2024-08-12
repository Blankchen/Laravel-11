import request from "./axios";

export function Login(data) {
    return request({
        url: "/auth/login",
        method: "post",
        data,
    });
}
