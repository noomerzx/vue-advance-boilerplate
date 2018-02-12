
import HttpRequest from './http_request'

class MessageProvider extends HttpRequest {
  sendMessage (data) {
    return this.create('/send-message', data)
  }
}

export default MessageProvider
