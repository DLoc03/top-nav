//Hàm xoá từ khoá tìm kiếm trong thanh search bar
function clearSearchBar() {
    const searchBar = document.getElementById('search-bar');
    result = searchBar.value;
    searchBar.value = '';
}

//Hàm lấy nội dung từ các từ khoá được gợi ý bên dưới
function fillSearchBar(element) {
    const searchBar = document.getElementById('search-bar');
    searchBar.value += element.textContent;
}

//Sự kiện khi người dùng nhấn Enter thì gọi hàm tìm kiếm
document.getElementById("search-bar").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchFunction();
    }
});

//Hàm tìm kiếm
function searchFunction() {
    var result = document.getElementById("search-bar").value;
    if (result == '') {
        alert("Please enter the search keyword") //Hiện thông báo lỗi vì từ khoá tìm kiếm trống
        document.getElementById('search-result-content').innerHTML = '';
    }
    else {
        document.getElementById('search-result-content').innerHTML = `Nga dở hơi'`;
        clearSearchBar();
        console.log(result)
    }
}

//Hàm hiển thị form đăng nhập lên màn hình khi người dùng nhấn nút Login
function showLogin() {
    var form = document.getElementById("loginForm");
    if (form.style.display === "block") {
        form.style.display = "none"; // Đóng form nếu đã mở
    } else {
        form.style.display = "block"; // Hiển thị form nếu đang đóng
    }
}

// Đóng form nếu click bên ngoài form
document.addEventListener("click", function(event) {
    var form = document.getElementById("loginForm");
    var button = document.querySelector("button");
    if (!form.contains(event.target) && event.target != button) {
        form.style.display = "none"; 
    }
});

//Hàm lấy tên người dùng và mật khẩu
function getKeyLogin() {
    var username = document.getElementById('username-input').value;
    var password = document.getElementById('password-input').value;
    console.log('Username: ' + username);
    console.log('Password: ' + password);
}

function showResigter() {
    var form = document.getElementById("resigterForm");
    if (form.style.display === "block") {
        form.style.display = "none"; // Đóng form nếu đã mở
    } else {
        form.style.display = "block"; // Hiển thị form nếu đang đóng
    }
}


function getKeyResigter() {
    var username = document.getElementById('username-input').value;
    var email = document.getElementById('email-input').value;
    var password = document.getElementById('password-input').value;
    console.log('Username: ' + username);
    console.log('Email: ' + email);
    console.log('Password: ' + password);
}

document.addEventListener("click", function(event) {
    var form = document.getElementById("resigterForm");
    var button = document.querySelector("button");
    if (!form.contains(event.target) && event.target != button) {
        form.style.display = "none"; 
    }
});
