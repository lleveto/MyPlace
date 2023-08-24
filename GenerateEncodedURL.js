<script>
function openEncodedURL(parcelpin) {
  var encodedParcelID = encodeURIComponent(parcelpin);
  var url = "https://myplace.cuyahogacounty.us/" + encodedParcelID;
  window.open(url, "_blank");
}
</script>
