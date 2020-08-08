function get() {
	var total = document.getElementById("baithi").value;
	var medium = document.getElementById("trungbinh").value;
	var prioritize = document.getElementById("uutien").value;
	var encourage = document.getElementById("khuyenkhich").value;
	var dc = 5
	var dxtn = (((Number(total)+Number(encourage))/4)*7+(Number(medium)*3))/10+Number(prioritize);

	if (total==0 || medium==0) 
	{
		alert("Bạn đã để trống tổng điểm 4 bài thi hoặc điểm trung bình năm học 12 hoặc nhập giá trị không hợp lệ !");
	}

	else if(dxtn>= dc)
	{
		document.getElementById("myalert").style.display = "block";;
		document.getElementById("demo").innerHTML = ("<strong>Bạn đã tốt nghiệp cấp 3 xin chúc mừng !!!</strong>"+'<br>'+"Điểm của bạn là :"+dxtn);
	}
	else
	{
		document.getElementById("alert").style.display = "block";;
		document.getElementById("show").innerHTML = ("<strong>Thật không may. Bạn đã trượt tốt nghiệp cấp 3 !!!</strong>"+'<br>'+"Điểm của bạn là :"+dxtn);
	}
}