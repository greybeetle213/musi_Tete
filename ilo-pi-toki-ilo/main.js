function main(){
try{
path$ = 'toki-ilo-pona/'
document.title = "musi Tete"
seloOPENBRACKETleko_CLOSEBRACKET = [[0, 0, 0, 0]  ,   [0, 1, 1, 0]  ,   [0, 1, 1, 0]  ,   [0, 0, 0, 0]  ,   [7, 7, 0]]
seloOPENBRACKETpalisa_CLOSEBRACKET = [[0, 0, 1, 0]  ,   [0, 0, 1, 0]  ,   [0, 0, 1, 0]  ,   [0, 0, 1, 0]  ,   [3, 3, 7]]
seloOPENBRACKETlinja_CLOSEBRACKET = [[0, 0, 0, 0]  ,   [0, 0, 1, 0]  ,   [0, 0, 1, 1]  ,   [0, 0, 0, 1]  ,   [7, 0, 0]]
seloOPENBRACKETesun_CLOSEBRACKET = [[0, 0, 0, 0]  ,   [0, 0, 0, 1]  ,   [0, 0, 1, 1]  ,   [0, 0, 1, 0]  ,   [0, 7, 0]]
seloOPENBRACKETpi_CLOSEBRACKET = [[0, 0, 0, 0]  ,   [0, 0, 0, 1]  ,   [0, 1, 1, 1]  ,   [0, 0, 0, 0]  ,   [7, 5, 0]]
seloOPENBRACKETto_CLOSEBRACKET = [[0, 0, 0, 0]  ,   [0, 0, 0, 0]  ,   [0, 1, 1, 1]  ,   [0, 0, 0, 1]  ,   [3, 0, 0]]
seloOPENBRACKETtaso_CLOSEBRACKET = [[0, 0, 0, 0]  ,   [0, 0, 1, 0]  ,   [0, 1, 1, 1]  ,   [0, 0, 0, 0]  ,   [7, 0, 7]]
wilepitawapokatantawasike = [[0, -1]  ,   [1, 0]  ,   [0, 1]  ,   [-1, 0]]
tokipikamasona = ""
function oopen(){
if (readCookie("nanpawawa") == 0){
nanpawawapisulinanpawan = "ala"
}else{
nanpawawapisulinanpawan = readCookie("nanpawawa")
}
lekoali = []
mutesike = 0
while (mutesike < 20){
lekoali.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
mutesike = safeAdd([mutesike, 1])
}
tawasike = 0
seloali = [seloOPENBRACKETleko_CLOSEBRACKET  ,   seloOPENBRACKETpalisa_CLOSEBRACKET  ,   seloOPENBRACKETlinja_CLOSEBRACKET  ,   seloOPENBRACKETesun_CLOSEBRACKET  ,   seloOPENBRACKETpi_CLOSEBRACKET  ,   seloOPENBRACKETto_CLOSEBRACKET  ,   seloOPENBRACKETtaso_CLOSEBRACKET]
nanpapiselokama = safeAdd([Math.random() * 7])
nanpapiselokama = Math.floor(nanpapiselokama)
selopitawaanpa = seloali[nanpapiselokama]
nanpapiselokama = safeAdd([Math.random() * 7])
nanpapiselokama = Math.floor(nanpapiselokama)
selokama = seloali[nanpapiselokama]
tawasike = 0
lonselopoka = 3
lonselosewi = -4
janliawenlukaenenananpawan = 0
janliawenlukaenenananpatu = 0
janliawenlukaenenapipokaopen = 0
janliawenlukaenenapipokapini = 0
tenpopitawaanpapisulinanpawan = 40
tenpopitawapokapisulinanpawan = 5
sulipiantepitenpopitawaanpa = 2
tenpopitawapoka = 0
tenpopitawaanpa = tenpopitawapokapisulinanpawan
tenpopikamawekalinja = 0
nanpapiwawajan = 0
wilewawamusi = 1
linjapimutesemeliwekalonwilewawani = 0
musililon = 0
}
oopen()
function _sike(){
if (musililon){
omusi()
}else{
sitelenopen()
}
}
function sitelenopen(){
kule(0,0,0)
leko(0, 0, 200, 200)
sitelen("sitelenopen.png", 2, 20)
kule(9,9,9)
sitelentoki("olukae nenateXtolamusiliopen", 35, 188)
sitelentoki("nanpasinapisulinanpawan:", 5, 157)
sitelentoki(nanpawawapisulinanpawan, 5, 169)
sitelentoki("musiliopenlasuliutalaoseme:", 100, 157)
suliutalapinasintoki = safeAdd(["<-" , Base10ToTokiPona(wilewawamusi) , "->"])
lonpinanpapisuliutala = safeAdd([200 , ctx$.measureText(suliutalapinasintoki).actualBoundingBoxRight * -1])
sitelentoki(suliutalapinasintoki, lonpinanpapisuliutala, 169)
if (nena("nanpawan")){
musililon = 1
}
if (nena("pokaopen") && janliawenlukaenenapipokaopen == 0){
if (wilewawamusi > 1){
wilewawamusi = safeAdd([wilewawamusi, -1])
tenpopitawaanpapisulinanpawan = safeAdd([tenpopitawaanpapisulinanpawan, sulipiantepitenpopitawaanpa])
}
janliawenlukaenenapipokaopen = 1
} else if (nena("pokaopen") == 0){
janliawenlukaenenapipokaopen = 0
}
if (nena("pokapini") && janliawenlukaenenapipokapini == 0){
if (wilewawamusi < 20){
wilewawamusi = safeAdd([wilewawamusi, 1])
tenpopitawaanpapisulinanpawan = safeAdd([tenpopitawaanpapisulinanpawan, sulipiantepitenpopitawaanpa * -1])
}
janliawenlukaenenapipokapini = 1
} else if (nena("pokapini") == 0){
janliawenlukaenenapipokapini = 0
}
}
function omusi(){
if (tenpopikamawekalinja == 0){
if (tenpopitawapoka > 0){
tenpopitawapoka = safeAdd([tenpopitawapoka, -1])
}
tawasikepitenponi = 0
lonselopokapitenpopini = lonselopoka
lonselosewipitenpopini = lonselosewi
okuteenena()
wilelaotawamapitenpopini()
otawaanpa()
ositelen()
}else{
tenpopikamawekalinja = safeAdd([tenpopikamawekalinja, -1])
ositelen()
if (tenpopikamawekalinja == 0){
lekoalisin = []
mutesike = 0
while (mutesike < 20){
if (linjapikamaweka[mutesike] == 1){
lekoalisin.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
}
mutesike = safeAdd([mutesike, 1])
}
mutesike = 0
mutepilinjapikamaweka = 0
while (mutesike < 20){
if (linjapikamaweka[mutesike] == 0){
lekoalisin.push(lekoali[mutesike ])
}else{
mutepilinjapikamaweka = safeAdd([mutepilinjapikamaweka, 1])
}
mutesike = safeAdd([mutesike, 1])
}
onanpaewawapilekopikamaweka()
lekoali = lekoalisin
}
}
}
function onanpaewawapilekopikamaweka(){
linjapimutesemeliwekalonwilewawani = safeAdd([linjapimutesemeliwekalonwilewawani, 1])
nanpapiwawajan = safeAdd([nanpapiwawajan, mutepilinjapikamaweka * mutepilinjapikamaweka * wilewawamusi])
if (linjapimutesemeliwekalonwilewawani == 10){
linjapimutesemeliwekalonwilewawani = 0
if (tenpopitawaanpapisulinanpawan > 5){
tenpopitawaanpapisulinanpawan = safeAdd([tenpopitawaanpapisulinanpawan, sulipiantepitenpopitawaanpa * -1])
wilewawamusi = safeAdd([wilewawamusi, 1])
}
}
}
function otawaanpa(){
tenpopitawaanpa = safeAdd([tenpopitawaanpa, -1])
if (tenpopitawaanpa < 1){
lonselosewi = safeAdd([lonselosewi, 1])
tenpopitawaanpa = tenpopitawaanpapisulinanpawan
if (nena("anpa")){
tenpopitawaanpa = 5
}
}
mutesikesewipikamapini = 0
while (mutesikesewipikamapini < 4){
mutesikepokapikamapini = 0
while (mutesikepokapikamapini < 4){
if (selopitawaanpa[mutesikesewipikamapini][mutesikepokapikamapini] == 1){
lonpokapilekoanpa = safeAdd([mutesikepokapikamapini , lonselopoka])
lonsewipilekoanpa = safeAdd([lonselosewi , mutesikesewipikamapini])
if (lonsewipilekoanpa > -1){
if (lonsewipilekoanpa == 20 || lekoali[lonsewipilekoanpa][lonpokapilekoanpa] != 0){
lonselosewi = safeAdd([lonselosewi, -1])
omaeselopitawaanpa()
}
}
}
mutesikepokapikamapini = safeAdd([mutesikepokapikamapini, 1])
}
mutesikesewipikamapini = safeAdd([mutesikesewipikamapini, 1])
}
}
function wilelaotawamapitenpopini(){
mutesikesewipikamapini = 0
while (mutesikesewipikamapini < 4){
mutesikepokapikamapini = 0
while (mutesikepokapikamapini < 4){
if (selopitawaanpa[mutesikesewipikamapini][mutesikepokapikamapini] == 1){
lonpokapilekoanpa = safeAdd([mutesikepokapikamapini , lonselopoka])
lonsewipilekoanpa = safeAdd([lonselosewipitenpopini , mutesikesewipikamapini])
if (lonsewipilekoanpa > 0){
if (lekoali[lonsewipilekoanpa][lonpokapilekoanpa] != 0){
if (tawasikepitenponi == 1){
nasinpiilotenpoalalaotawasikeeselo()
} else if (tawasikepitenponi == -1){
nasinpiilotenpolaotawasikeeselo()
}
lonselopoka = lonselopokapitenpopini
lonselosewi = lonselosewipitenpopini
}
} else if (lonpokapilekoanpa < 0 || lonpokapilekoanpa > 9){
if (tawasikepitenponi == 1){
nasinpiilotenpoalalaotawasikeeselo()
} else if (tawasikepitenponi == -1){
nasinpiilotenpolaotawasikeeselo()
}
lonselopoka = lonselopokapitenpopini
lonselosewi = lonselosewipitenpopini
}
}
mutesikepokapikamapini = safeAdd([mutesikepokapikamapini, 1])
}
mutesikesewipikamapini = safeAdd([mutesikesewipikamapini, 1])
}
}
function omoli(){
if (nanpapiwawajan > TokiPonaToBase10(nanpawawapisulinanpawan)){
nanpawawapisulinanpawan = Base10ToTokiPona(nanpapiwawajan)
saveCookie("nanpawawa", nanpawawapisulinanpawan)
}
oopen()
}
function omaeselopitawaanpa(){
mutesikesewi = 0
while (mutesikesewi < 4 && musililon){
mutesikepoka = 0
while (mutesikepoka < 4){
if (selopitawaanpa[mutesikesewi][mutesikepoka] == 1){
lonpokaleko = safeAdd([mutesikepoka , lonselopoka])
lonsewileko = safeAdd([mutesikesewi , lonselosewi])
if (lonsewileko < 0){
omoli()
}else{
lekoali[lonsewileko][lonpokaleko] = selopitawaanpa[4]
}
}
mutesikepoka = safeAdd([mutesikepoka, 1])
}
mutesikesewi = safeAdd([mutesikesewi, 1])
}
lonselopoka = 3
lonselosewi = -4
selopitawaanpa = seloali[nanpapiselokama]
nanpapiselokama = safeAdd([Math.random() * 7])
nanpapiselokama = Math.floor(nanpapiselokama)
selokama = seloali[nanpapiselokama]
tawasike = 0
mutesike = 0
linjapikamaweka = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
mutesikesewi = 0
while (mutesikesewi < 20){
mutesikepoka = 0
alilileko = 1
while (mutesikepoka < 10){
if (lekoali[mutesikesewi][mutesikepoka] == 0){
alilileko = 0
}
mutesikepoka = safeAdd([mutesikepoka, 1])
}
if (alilileko){
linjapikamaweka[mutesikesewi] = 1
tenpopikamawekalinja = 30
}
mutesikesewi = safeAdd([mutesikesewi, 1])
}
}
function okuteenena(){
if (nena("nanpawan") && janliawenlukaenenananpawan == 0){
nasinpiilotenpolaotawasikeeselo()
janliawenlukaenenananpawan = 1
}
if (nena("nanpawan") == 0 && janliawenlukaenenananpawan){
janliawenlukaenenananpawan = 0
}
if (nena("nanpatu") && janliawenlukaenenananpatu == 0){
nasinpiilotenpoalalaotawasikeeselo()
janliawenlukaenenananpatu = 1
}
if (nena("nanpatu") == 0 && janliawenlukaenenananpatu){
janliawenlukaenenananpatu = 0
}
if (nena("pokaopen") && tenpopitawapoka == 0 && janliawenlukaenenapipokaopen == 0){
lonselopoka = safeAdd([lonselopoka, -1])
janliawenlukaenenapipokaopen = 1
tenpopitawapoka = safeAdd([tenpopitawapokapisulinanpawan , 20])
} else if (nena("pokaopen") && tenpopitawapoka == 0){
lonselopoka = safeAdd([lonselopoka, -1])
tenpopitawapoka = tenpopitawapokapisulinanpawan
}
if (nena("pokaopen") == 0 && janliawenlukaenenapipokaopen == 1){
janliawenlukaenenapipokaopen = 0
tenpopitawapoka = 0
}
if (nena("pokapini") && tenpopitawapoka == 0 && janliawenlukaenenapipokapini == 0){
lonselopoka = safeAdd([lonselopoka, 1])
janliawenlukaenenapipokapini = 1
tenpopitawapoka = safeAdd([tenpopitawapokapisulinanpawan , 20])
} else if (nena("pokapini") && tenpopitawapoka == 0){
lonselopoka = safeAdd([lonselopoka, 1])
tenpopitawapoka = tenpopitawapokapisulinanpawan
}
if (nena("pokapini") == 0 && janliawenlukaenenapipokapini == 1){
janliawenlukaenenapipokapini = 0
tenpopitawapoka = 0
}
}
function nasinpiilotenpolaotawasikeeselo(){
selosin = [[]  ,   []  ,   []  ,   []]
mutesikepoka = 0
while (mutesikepoka < 4){
mutesikesewi = 3
while (mutesikesewi > -1){
selosin[mutesikepoka].push(selopitawaanpa[mutesikesewi][mutesikepoka])
mutesikesewi = safeAdd([mutesikesewi, -1])
}
mutesikepoka = safeAdd([mutesikepoka, 1])
}
selosin.push(selopitawaanpa[4])
selopitawaanpa = selosin
tawasike = safeAdd([tawasike, 1])
if (tawasike > 3){
tawasike = 0
}
lonselopoka = safeAdd([lonselopoka, wilepitawapokatantawasike[tawasike][0]])
lonselosewi = safeAdd([lonselosewi, wilepitawapokatantawasike[tawasike][1]])
tawasikepitenponi = 1
}
function nasinpiilotenpoalalaotawasikeeselo(){
selosin = [[]  ,   []  ,   []  ,   []]
mutesikepoka = 3
while (mutesikepoka > -1){
mutesikesewi = 0
while (mutesikesewi < 4){
pokapona = safeAdd([mutesikepoka * -1 , 3])
selosin[pokapona].push(selopitawaanpa[mutesikesewi][mutesikepoka])
mutesikesewi = safeAdd([mutesikesewi, 1])
}
mutesikepoka = safeAdd([mutesikepoka, -1])
}
selosin.push(selopitawaanpa[4])
selopitawaanpa = selosin
lonselopoka = safeAdd([lonselopoka, wilepitawapokatantawasike[tawasike][0] * -1])
lonselosewi = safeAdd([lonselosewi, wilepitawapokatantawasike[tawasike][1] * -1])
tawasike = safeAdd([tawasike, -1])
if (tawasike < 0){
tawasike = 3
}
tawasikepitenponi = -1
}
function ositelen(){
kule(0,0,0)
leko(0, 0, 200, 200)
kule(5,5,5)
leko(0, 0, 90, 200)
leko(190, 0, 10, 200)
kule(4,4,4)
leko(10, 10, 70, 70)
mutesikesewi = 0
while (mutesikesewi < 4){
mutesikepoka = 0
while (mutesikepoka < 4){
if (selokama[mutesikesewi][mutesikepoka] == 1){
lonpokaleko = safeAdd([mutesikepoka * 10 , 20])
lonsewileko = safeAdd([mutesikesewi * 10 , 20])
kule(selokama[4][0],selokama[4][1],selokama[4][2])
leko(lonpokaleko, lonsewileko, 10, 10)
}
mutesikepoka = safeAdd([mutesikepoka, 1])
}
mutesikesewi = safeAdd([mutesikesewi, 1])
}
kule(9,9,9)
sitelentoki("lekosin:", 1, 8)
sitelentoki("nanpasina:", 1, 102)
sitelenpiwawajan = Base10ToTokiPona(nanpapiwawajan)
sitelentoki(sitelenpiwawajan, 1, 114)
sitelentoki("suliutala:", 1, 130)
sitelenpiwawawile = Base10ToTokiPona(wilewawamusi)
sitelentoki(sitelenpiwawawile, 1, 142)
mutesikesewi = 0
kule(0,0,0)
while (mutesikesewi < 4){
mutesikepoka = 0
while (mutesikepoka < 4){
if (selopitawaanpa[mutesikesewi][mutesikepoka] == 1){
lonpokaleko = safeAdd([90 , mutesikepoka * 10 , lonselopoka * 10])
lonsewileko = safeAdd([mutesikesewi * 10 , lonselosewi * 10])
kule(selopitawaanpa[4][0],selopitawaanpa[4][1],selopitawaanpa[4][2])
leko(lonpokaleko, lonsewileko, 10, 10)
}
mutesikepoka = safeAdd([mutesikepoka, 1])
}
mutesikesewi = safeAdd([mutesikesewi, 1])
}
mutesikesewi = 0
while (mutesikesewi < 20){
mutesikepoka = 0
while (mutesikepoka < 10){
if (lekoali[mutesikesewi][mutesikepoka] != 0){
lonpokaleko = safeAdd([90 , mutesikepoka * 10])
lonsewileko = safeAdd([mutesikesewi * 10])
kule(lekoali[mutesikesewi][mutesikepoka][0],lekoali[mutesikesewi][mutesikepoka][1],lekoali[mutesikesewi][mutesikepoka][2])
leko(lonpokaleko, lonsewileko, 10, 10)
}
mutesikepoka = safeAdd([mutesikepoka, 1])
}
mutesikesewi = safeAdd([mutesikesewi, 1])
}
kule(9,9,9)
if (tenpopikamawekalinja > 0){
mutesike = 0
while (mutesike < 20){
if (linjapikamaweka[mutesike] == 1){
lonsewipilinjawalo = safeAdd([mutesike * 10])
leko(90, lonsewipilinjawalo, 100, 10)
}
mutesike = safeAdd([mutesike, 1])
}
}
}
sike$ = setInterval(function () {try {_sike()} catch (err) {errorDisplayer(err)}}, 100/30)
}catch(err){
    errorDisplayer(err)
}
window.removeEventListener("error", (event) => {
    testError = event
});   
}