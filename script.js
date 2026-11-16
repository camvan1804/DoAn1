
// 1. LẤY CÁC PHẦN TỬ HTML

const userInput = document.getElementById("userInput");

const chatMessages = document.getElementById("chatMessages");


// 2. HÀM GỬI TIN NHẮN

function sendMessage() {

    // Lấy nội dung người dùng nhập
    const question = userInput.value.trim();

    // Kiểm tra nếu chưa nhập câu hỏi
    if (question === "") {
        alert("Bạn vui lòng nhập câu hỏi!");
        return;
    }

    // Hiển thị câu hỏi của người dùng
    addMessage(question, "user-message");

    // Xóa nội dung ô nhập
    userInput.value = "";

    // Lấy câu trả lời từ chatbot
    const answer = getBotAnswer(question);

    // Hiển thị câu trả lời
    setTimeout(function () {
        addMessage(answer, "bot-message");
    }, 400);
}


// 3. HÀM HIỂN THỊ TIN NHẮN

function addMessage(content, className) {

    const message = document.createElement("div");

    message.classList.add("message", className);

    message.textContent = content;

    chatMessages.appendChild(message);

    // Tự động cuộn xuống cuối
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// 4. HÀM XỬ LÝ CÂU HỎI

function getBotAnswer(question) {

    const text = question.toLowerCase();

    if (text.includes("xin chào")) {

        return "Xin chào! Tôi có thể giúp gì cho bạn?";

    }

    else if (text.includes("học phí")) {

        return "Bạn muốn tìm hiểu học phí của ngành nào và năm học nào? Dữ liệu học phí chính thức sẽ được bổ sung vào hệ thống.";

    }

    else if (text.includes("học bổng")) {

        return "Bạn muốn tìm hiểu điều kiện, quyền lợi hay số lượng suất học bổng? Tôi sẽ hỗ trợ bạn.";

    }

    else if (text.includes("tuyển sinh")) {

        return "Bạn muốn tìm hiểu phương thức tuyển sinh, ngành đào tạo hay điều kiện xét tuyển?";

    }

    else if (text.includes("ngành học")) {

        return "Bạn hãy nhập tên ngành đào tạo muốn tìm hiểu nhé.";

    }

    else if (text.includes("cảm ơn")) {

        return "Rất vui được hỗ trợ bạn! Chúc bạn học tập tốt.";

    }

    else {

        return "Xin lỗi, tôi chưa tìm thấy thông tin phù hợp. Bạn hãy thử hỏi về học phí, học bổng hoặc tuyển sinh nhé.";

    }
}


// 5. NHẤN ENTER ĐỂ GỬI

userInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});
