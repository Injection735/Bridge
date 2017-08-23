Bridge.merge(new System.Globalization.CultureInfo("mas-TZ", true), {
    englishName: "Masai (Tanzania)",
    nativeName: "Maa (Tansania)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "TSh",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Jpi","Jtt","Jnn","Jtn","Alh","Iju","Jmo"],
        abbreviatedMonthGenitiveNames: ["Dal","Ará","Ɔɛn","Doy","Lép","Rok","Sás","Bɔ́r","Kús","Gís","Shʉ́","Ntʉ́",""],
        abbreviatedMonthNames: ["Dal","Ará","Ɔɛn","Doy","Lép","Rok","Sás","Bɔ́r","Kús","Gís","Shʉ́","Ntʉ́",""],
        amDesignator: "Ɛnkakɛnyá",
        dateSeparator: "/",
        dayNames: ["Jumapílí","Jumatátu","Jumane","Jumatánɔ","Alaámisi","Jumáa","Jumamósi"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd, d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Oladalʉ́","Arát","Ɔɛnɨ́ɔɨŋɔk","Olodoyíóríê inkókúâ","Oloilépūnyīē inkókúâ","Kújúɔrɔk","Mórusásin","Ɔlɔ́ɨ́bɔ́rárɛ","Kúshîn","Olgísan","Pʉshʉ́ka","Ntʉ́ŋʉ́s",""],
        monthNames: ["Oladalʉ́","Arát","Ɔɛnɨ́ɔɨŋɔk","Olodoyíóríê inkókúâ","Oloilépūnyīē inkókúâ","Kújúɔrɔk","Mórusásin","Ɔlɔ́ɨ́bɔ́rárɛ","Kúshîn","Olgísan","Pʉshʉ́ka","Ntʉ́ŋʉ́s",""],
        pmDesignator: "Ɛndámâ",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Jpi","Jtt","Jnn","Jtn","Alh","Iju","Jmo"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    }),

    TextInfo: Bridge.merge(new System.Globalization.TextInfo(), {
        ANSICodePage: 0,
        CultureName: "mas-TZ",
        EBCDICCodePage: 500,
        IsRightToLeft: false,
        LCID: 4096,
        listSeparator: ";",
        MacCodePage: 2,
        OEMCodePage: 1,
        IsReadOnly: true
    })
});