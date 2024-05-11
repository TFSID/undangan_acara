function encodeHTML(input) {
  if (!input) return "";
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}
// Mendapatkan query string dari URL
var queryString = window.location.search;
// console.log(queryString)

// Membuat objek URLSearchParams dari query string
var params = new URLSearchParams(queryString);

// Mendapatkan nilai dari parameter 'kpd'
var kpdValue = encodeHTML(params.get("kpd"));
console.log(kpdValue);

// Memeriksa apakah nilai parameter 'kpd' tidak ada
// if (kpdValue === null) {
//   // Jika parameter tidak ada, redirect ke halaman HTML lain
//   window.location.href = "halaman_lain.html";
// }

var nama_tamu_id = document.getElementById("nm_tamu");
nama_tamu_id.innerHTML = kpdValue;
console.log(nama_tamu_id);

// nama_tamu.innerHTML = "kpdValue"
