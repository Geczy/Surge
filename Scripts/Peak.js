const body = JSON.stringify({
    "response": {
        "bbuid": "NKoKXsjJnw",
        "usedIntroOfferPeriod": false,
        "class": "UserModuleBillingResponse",
        "is_in_billing_retry": false,
        "modules": [{
            "class": "BillingModuleResponse",
            "name": "com.brainbow.module.peak.PeakModule",
            "subscription": {
                "status": 0,
                "statusdate": 0,
                "source": {
                    "id": "com.brainbow.peak.arsub_1wtrial_12m3499",
                    "cancelable": false,
                    "provider": "itunes",
                    "type": "trial"
                },
                "bbuid": "NKoKXsjJnw",
                "endTime": 1899724030000,
                "startTime": 1577884030503,
                "pro": true
            }
        }]
    },
    "metaResponse": {
        "code": 0
    }
});


$done({body})