const tongDiem = (...numbers) => {
  let total = 0;
  let i = 0;
  for (i; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / i;
};

document.getElementById("btnKhoi1").onclick = () => {
  let diemToan = +document.getElementById("inpToan").value;
  let diemLy = +document.getElementById("inpLy").value;
  let diemHoa = +document.getElementById("inpHoa").value;

  let result = tongDiem(diemToan, diemLy, diemHoa);
  document.getElementById("tbKhoi1").innerHTML = result.toFixed(1);
};

document.getElementById("btnKhoi2").onclick = () => {
  let diemVan = +document.getElementById("inpVan").value;
  let diemSu = +document.getElementById("inpSu").value;
  let diemDia = +document.getElementById("inpDia").value;
  let diemAnh = +document.getElementById("inpEnglish").value;

  let result = tongDiem(diemVan, diemSu, diemDia, diemAnh);
  document.getElementById("tbKhoi2").innerHTML = result.toFixed(1);
};
