
const chessBoard = document.getElementById("chessBoard");

// Kích thước của bàn cờ (8x8)
const size = 8;

// Tạo bàn cờ bằng JavaScript
function createChessBoard() {
    for (let row = 0; row < size; row++) {
        const newRow = chessBoard.insertRow();

        for (let col = 0; col < size; col++) {
            const newCell = newRow.insertCell();

            // Đặt các lớp (class) cho ô dựa trên vị trí để tạo bàn cờ xen kẽ màu đen và trắng
            newCell.className = (row + col) % 2 === 0 ? "white" : "black";
        }
    }
}

// Gọi hàm để tạo bàn cờ khi trang web được tải
createChessBoard();
