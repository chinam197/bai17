// Lấy đối tượng bảng cửu chương từ DOM
const multiplicationTable = document.getElementById("multiplicationTable");

// Kích thước bảng cửu chương (10x10)
const size = 10;

// Tạo bảng cửu chương bằng JavaScript
function createMultiplicationTable() {
    for (let row = 1; row <= size; row++) {
        const newRow = multiplicationTable.insertRow();

        for (let col = 1; col <= size; col++) {
            const newCell = newRow.insertCell();
            const result = row * col;

            // Đặt nội dung của ô là kết quả của phép nhân
            newCell.textContent = `${row} x ${col} = ${result}`;
        }
    }
}

// Gọi hàm để tạo bảng cửu chương khi trang web được tải
createMultiplicationTable();
