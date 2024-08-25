function sumArray(arr) {
    // Khởi tạo biến để lưu tổng
    let total = 0;
    
    // Lặp qua từng phần tử trong mảng
    for (let i = 0; i < arr.length; i++) {
        // Cộng giá trị của phần tử vào tổng
        total += arr[i];
    }
    
    // Trả về tổng
    return total;
}

let array1 = [1, 2, 3, 4, 5];
console.log(sumArray(array1)); // Kết quả: 15