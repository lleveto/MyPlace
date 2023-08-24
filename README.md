# MyPlace URL Redirection

This HTML page simplifies the process of generating a URL for the MyPlace application by utilizing a parcel pin provided through a query parameter. The generated URL includes an encoded parcel pin along with supplementary parameters that are essential for conducting a MyPlace search.

## How It Works

1. Upon loading the page, the script retrieves the parcel pin from the `parcelpin` query parameter.
2. The parcel pin is encoded using Base64, allowing it to be seamlessly incorporated into a URL.
3. Any undesirable characters, such as double quotation marks, are filtered out from the parcel pin.
4. Subsequently, the encoded and cleansed parcel pin is employed to construct the MyPlace URL, augmented by extra parameters for city and searchBy.
5. The user is then automatically redirected to the freshly generated MyPlace URL.

## Usage

1. Deploy the HTML page to a web server or utilize platforms like GitHub Pages for hosting.
2. Access the HTML page using a URL containing the parcel pin as a query parameter:
      https://example.com/myplace-url-redirection/?parcelpin=YOUR_PARCEL_PIN
Replace `YOUR_PARCEL_PIN` with the authentic parcel pin you wish to generate a MyPlace URL for.
3. The page will instantly redirect you to the MyPlace URL featuring the encoded and purified parcel pin, ready to initiate a search.

## Example

For instance, if you access the HTML page via the following URL:
  https://example.com/myplace-url-redirection/?parcelpin=10110069"
  The page will create and direct you to:
  https://myplace.cuyahogacounty.us/MTAxMDkwNjc=?city=OTk=&searchBy=UGFyY2Vs

This example presupposes that the provided parcel pin should undergo cleansing, encoding, and inclusion within the MyPlace URL.
