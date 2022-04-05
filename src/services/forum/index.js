import Client from "../client";
import Storage from "../storage";


const client = new Client("https://sc-22-forum-service.herokuapp.com/api/v1/")
const storage = new Storage();


export default class Forum {
  // discussion
  start_discussion(discussion_data) {
    return client.send_request({
      method: "POST",
      url: "/discussion/",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${storage.get("token")}`
      },
      data: discussion_data
    })
  }

  get_discussion(discussion_id) {
    return client.send_request({
      method: "GET",
      url: `/discussion/${discussion_id}/`,
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  update_discussion(discussion_id, discussion_update_data) {
    return client.send_request({
      method: "PUT",
      url: `/discussion/${discussion_id}/`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${storage.get("token")}`
      },
      data: discussion_update_data
    })
  }

  delete_discussion(discussion_id) {
    return client.send_request({
      method: "DELETE",
      url: `/discussion/${discussion_id}/`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${storage.get("token")}`
      }
    })
  }

  // reply
  reply_to_discussion(discussion_id, reply_data) {
    return client.send_request({
      method: "POST",
      url: `/reply/${discussion_id}/new/`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${storage.get("token")}`
      },
      data: reply_data
    })
  }

  update_discussion_reply(reply_id, reply_update_data) {
    return client.send_request({
      method: "PUT",
      url: `/reply/${reply_id}/`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${storage.get("token")}`
      },
      data: reply_update_data
    })
  }

  get_discussion_reply(reply_id) {
    return client.send_request({
      method: "GET",
      url: `/reply/${reply_id}/`,
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  delete_discussion_reply(reply_id) {
    return client.send_request({
      method: "DELETE",
      url: `/reply/${reply_id}/`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${storage.get("token")}`
      }
    })
  }
}
