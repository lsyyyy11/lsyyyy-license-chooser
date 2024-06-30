function chooseLicense() {
    const modification = document.getElementById('modification').value;
    const commercial = document.getElementById('commercial').value;

    let license = '';
    let licenseURL = '';
    let licenseImageURL = '';

    if (modification === 'yes') {
        if (commercial === 'yes') {
            license = 'CC BY 4.0';
            licenseURL = 'https://creativecommons.org/licenses/by/4.0/';
            licenseImageURL = 'https://i.creativecommons.org/l/by/4.0/88x31.png';
        } else {
            license = 'CC BY-NC 4.0';
            licenseURL = 'https://creativecommons.org/licenses/by-nc/4.0/';
            licenseImageURL = 'https://i.creativecommons.org/l/by-nc/4.0/88x31.png';
        }
    } else if (modification === 'no') {
        if (commercial === 'yes') {
            license = 'CC BY-ND 4.0';
            licenseURL = 'https://creativecommons.org/licenses/by-nd/4.0/';
            licenseImageURL = 'https://i.creativecommons.org/l/by-nd/4.0/88x31.png';
        } else {
            license = 'CC BY-NC-ND 4.0';
            licenseURL = 'https://creativecommons.org/licenses/by-nc-nd/4.0/';
            licenseImageURL = 'https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png';
        }
    } else if (modification === 'share-alike') {
        if (commercial === 'yes') {
            license = 'CC BY-SA 4.0';
            licenseURL = 'https://creativecommons.org/licenses/by-sa/4.0/';
            licenseImageURL = 'https://i.creativecommons.org/l/by-sa/4.0/88x31.png';
        } else {
            license = 'CC BY-NC-SA 4.0';
            licenseURL = 'https://creativecommons.org/licenses/by-nc-sa/4.0/';
            licenseImageURL = 'https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png';
        }
    }

    document.getElementById('license-link').href = licenseURL;
    document.getElementById('license-link').textContent = license;
    document.getElementById('license-image').src = licenseImageURL;
}
