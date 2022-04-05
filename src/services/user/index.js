import Client from "../client";


const client = new Client("https://sc-22-user-service.herokuapp.com/api/v1/")


export default class User {
  login(user_creds) {
    return client.send_request({
      method: "POST",
      url: "/login/",
      headers: {
        "Content-Type": "application/json"
      },
      data: user_creds
    })
  }

  register(user_data) {
    return client.send_request({
      method: "POST",
      url: "/register/",
      headers: {
        "Content-Type": "application/json"
      },
      data: user_data
    })
  }

  logout() {
    return client.send_request({
      method: "GET",
      url: "/logout/",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  get_profile() {
    return client.send_request({
      method: "GET",
      url: "/profile/",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  update_profile(user_update_data) {
    return client.send_request({
      method: "PUT",
      url: "/profile/",
      headers: {
        "Content-Type": "application/json"
      },
      data: user_update_data
    })
  }
}
