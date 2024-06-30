function chooseLicense() {
    const modification = document.getElementById('modification').value;
    const commercial = document.getElementById('commercial').value;

    let license = '';
    let licenseUrl = '';
    let licenseImage = '';

    if (modification === 'yes' && commercial === 'yes') {
        license = 'CC BY';
        licenseUrl = 'https://creativecommons.org/licenses/by/4.0/';
        licenseImage = 'https://licensebuttons.net/l/by/4.0/88x31.png';
    } else if (modification === 'yes' && commercial === 'no') {
        license = 'CC BY-NC';
        licenseUrl = 'https://creativecommons.org/licenses/by-nc/4.0/';
        licenseImage = 'https://licensebuttons.net/l/by-nc/4.0/88x31.png';
    } else if (modification === 'no' && commercial === 'yes') {
        license = 'CC BY-ND';
        licenseUrl = 'https://creativecommons.org/licenses/by-nd/4.0/';
        licenseImage = 'https://licensebuttons.net/l/by-nd/4.0/88x31.png';
    } else if (modification === 'no' && commercial === 'no') {
        license = 'CC BY-NC-ND';
        licenseUrl = 'https://creativecommons.org/licenses/by-nc-nd/4.0/';
        licenseImage = 'https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png';
    } else if (modification === 'share-alike' && commercial === 'yes') {
        license = 'CC BY-SA';
        licenseUrl = 'https://creativecommons.org/licenses/by-sa/4.0/';
        licenseImage = 'https://licensebuttons.net/l/by-sa/4.0/88x31.png';
    } else if (modification === 'share-alike' && commercial === 'no') {
        license = 'CC BY-NC-SA';
        licenseUrl = 'https://creativecommons.org/licenses/by-nc-sa/4.0/';
        licenseImage = 'https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png';
    }

    document.getElementById('license-link').innerText = license;
    document.getElementById('license-link').href = licenseUrl;
    document.getElementById('license-image').src = licenseImage;
    document.getElementById('license-image').alt = license;
}
