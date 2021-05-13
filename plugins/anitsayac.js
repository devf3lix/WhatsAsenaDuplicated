const Asena = require('../events');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');

    Asena.addCommand({pattern: 'anitsayac ?(.*)', fromMe: true, deleteCommand: false}, (async (message, match) => {

        if (match[1] === "2021") {

            await message.sendMessage('2021 Tarihinde Günümüze Kadar 152 Kadın Cinayeti Bulunmaktadır.\n\nİsimleri Aşağıdadır;\n\nHatice Soysal\nFeride T.\nMerve Abasiyun\nSelma Taşkömür\nKristina Noystka\nVildan İnce\nSevda Kösecik\nAslıhan Dal\nİsmi Bilinmiyor\nSevgi Tekin\nFerdane Kurt\nNergis Beyaz\nGonca Pekşen\nŞükran Biroğlu\nZerda Cunka\nDilan K.\nAleyna Yurtkölesi\nNeriman Kıvrak\nCanan Acer\nTürkiye El Mohammed\nAyşe Özgecan Usta\nŞule Yıldırım\nİkram Kaplan\nCahide Türkoğlu\nMelek Gürler\nGülsüm Berk\nGüler Kaya\nAyşe Yaylan\nDöndü Bakır\nAygül Çakan\nMelek Güngörmüş\nHatice Bodur\nŞadiye Öztürk\nFeride Yılmaz\nSüryan Büyük\nMürebba Gökçe\nNasıma Sharıfı\nPınar Can\nNebahat Kurt\nHalime Türkaslan\nSaniye Kaçar\nSemiha Peker\nSibel Aksu\nNuran Koçer\nSamira Lkhadır\nSaime Ü.\nRaziye Özcan\nKaranfil Özcan\nNur Cemil Hüseyin\nNergiz Sarıkaya\nGamze Gider\nGülbahar Asabay\nMediha Aygün\nFutem Alhamadi\nYağmur B.\nGizem Canbulut\nHatice Yıldız\nRabia Doğan\nSerpil Fikirli\nElif Atay\nBeyzanur Özel Fidan\nZilfunur Bakır\nMeral Sivrikaya\nİsmi Bilinmiyor\nSezen Ünlü\nNecla Demirtaş\nİsmi Bilinmiyor\nSeda Kayadelen\nBerrin Dalyanoğlu Keskin\nBensu Narlı\nHüsna Temurtaş\nMiraş Güneş\nIşık Gülsen Güder\nAysel Yok\nSerap T.\nSerpil Palalı\nİsmi Bilinmiyor\nÖzlem Salkım\nRabia Ş.\nRümeysa Sena Kara\nHavva Yılmaz\nEngin Dağlı\nNagihan Üste\nCeyla Ö.\nYeter Yılmaz\nNecla Demirbaş\nBedia Aydoğan\nİslim Ahmed\nBuket İlhan\nEmine Fulya Akçelebi-Bahar Bal\nBahriye Buket İlhan\nİsmi Bilinmiyor\nCeyda Önal\nSeher Elitaş\nİsmi Bilinmiyor\nSultan Aktürk\nSemra Çetin\nFatma Abravcı\nSelma Örenç\nSemanur KaplanS.\nD.Ayla Y.\nM.I.\nF.S.\nMelek Aslan\nDilek S.\nZeynep Erdoğan\nEmel D.\nSaynur Sürücü\nAyşe Cenikli\nKoçer Dönmez\nFiliz Gültekin\nAygün Yıldız\nMevlüde Parlak\nMeryem Ş.\nEsra Çelik\nTuba Menek\nZeynep Yılmaz\nPınar Kaban\nHatice Işık\nİsmi Bilinmiyor\nAkgül Yıldız\nYıldız Gül\nMevlüde Parlak\nHavva Çöllü\nSevcan Demir\nMervenur Polat\nArzu İlhan Koca\nAyşegül Türkben\nCennet Alptekin\nDila Yıldırım\nÖ.A.\nZülfi Nur Bakır\nAyşe Ekici\nMeryem Güneş\nKader Balcı\nHatice T.\nHatice Helvacı\nHacer Çetin\nGonca Akbulut\nBirgül Y.\nHanım Pınarlı\nFatma Kovan\nZeynep Çubuk İkinci\nMihrican Ekmenci\nGülistan Şaylemez\nGamze Kaçar Bozkurt\nEmel Tokkal\nMeral Şen\nHanife Yenisu\nAyşe Nazlı Kınacı\nReyhan Korkmaz');

        } else if (match[1] === "bilgi") {

            await message.sendMessage('‘Anıt Sayaç’, Türkiye’de kadına yönelik şiddetten ölen kadınların anısını yaşatmak için internet üzerinden kurulmuş bir anıt ve her gün güncellenen bir sayaçtır.\n\nKadına yönelik şiddet olaylarında 2012 yılının Ocak ve Eylül ayları arasında 125 kadının hayatını kaybettiği açıklandı. Anıt Sayaç kadın cinayetlerinin artarak devam ettiği böyle bir ortamda farkındalık yaratmak ve bilinmeyen verileri açığa kavuşturmak için düşünüldü. Ölen kadınlarımızın isimleriyle anılacağı bu web sitesi, kadına karşı şiddet konusunda toplumun duyarlılığını geliştirme projesi olmanının ötesinde ölen kadınlara adanmış bir anıttır.\n\nArtış tehdidi tabiatında gizli bu sayaç, şiddetin sürekliliğinin de habercisidir. Kaygı veren bir artış, ağırlaşan bir birikim yanında, aciliyete davet eden bir geri sayım da var ‘Anıt Sayaç’ta. Sayaç attıkça umut eksilmekte; tane tane tükenmektedir.');

        } else if (match[1] === "test") {

            await message.sendMessage('Bu Bir Testtir. Bilgi İçin ".anitsayac bilgi" Yazarak Bilgi Alabilirsin.\nAnıt Sayaç Hakkında Bilgi Almak İçin ".anitsayac hakkinda" Yazarak Bilgi Alabilirsin.(Hakkında Bilgisi Yakında Eklenecektir.)\nCodded By FelixBlack/#DevFelix');

        } else {

            await message.sendMessage('Codded By FelixBlack/#DevFelix. Anitsayac.com*a Teşekkürler. Çalışma Kontrolü İçin ".anitsayac test" Komutu İle Başlayabilirsin.');

    }

}));
