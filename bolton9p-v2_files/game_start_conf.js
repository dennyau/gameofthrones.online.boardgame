function getHouseCardsString(house_name, image_file_array) {
  var rt = '';
  var html_array = image_file_array.map(function(image_file){
    return '<img src="bolton9p-v2_files/cards_bolton9p_files/' + house_name + '/' + image_file + '" width="23%"/>';
  });
  //console.log(html_array);
  rt = html_array.join('\n');

  return rt;
}

arryn_cards = getHouseCardsString('arryn',[
  'bronze-yohn-royce.jpg',
  'vardis-egen.jpg',
  'jon-arryn.jpg',
  'nester-royce.jpg',
  'petyr-baelish.jpg',
  'robert-arryn.jpg',
  'mord.jpg'
]);
baratheon_cards = getHouseCardsString('baratheon',[
  'stannis-baratheon.jpg',
  'davos-seaworth.jpg',
  'malisandre.jpg',
  'alester-florent.jpg',
  'sallador-saan.jpg',
  'matthos-seaworth.jpg',
  'cressen.jpg'
]);

bolton_cards =  getHouseCardsString('bolton',[
  'roose-bolton.jpg',
  'ramsay-bolton.jpg',
  'walder-frey.jpg',
  'harald-karstark.jpg',
  'vargo-hoat.jpg',
  'reek.jpg',
  'wolkan.jpg'
]);

greyjoy_cards = getHouseCardsString('greyjoy',[
  'euron-crows-eye.jpg',
  'victarion-greyjog.jpg',
  'asha-greyjoy.jpg',
  'theon-greyjoy.jpg',
  'dagmer-cleftjaw.jpg',
  'balon-greyjoy.jpg',
  'aeron-damphair.jpg'
]);

lannister_cards = getHouseCardsString('lannister',[
  'jamie-lannister.jpg',
  'gregor-clegane.jpg',
  'the-hound.jpg',
  'kevan-lannister.jpg',
  'tyrion-lannister.jpg',
  'cersei-lannister.jpg',
  'tywin-lannister.jpg'
]);

martell_cards = getHouseCardsString('martell',[
  'the-red-viper.jpg',
  'areo-hotah.jpg',
  'obara-sand.jpg',
  'ellyria-sand.jpg',
  'nymeria-sand.jpg',
  'arianne-martell.jpg',
  'doran-martell.jpg'
]);

stark_cards = getHouseCardsString('stark',[
  'eddard-stark.jpg',
  'robb-stark.jpg',
  'rodrick-cassel.jpg',
  'howland-reed.jpg',
  'greatjon-umber.jpg',
  'bran-stark.jpg',
  'catelyn-stark.jpg'
]);

targaryen_cards = getHouseCardsString('targaryen',[
  'daenerys-targaryen.jpg',
  'khal-drogo.jpg',
  'jorah-mormont.jpg',
  'drogon.jpg',
  'qotho.jpg',
  'illyrio.jpg',
  'varys.jpg'
]);

tyrell_cards = getHouseCardsString('tyrell',[
  'renly-baratheon.jpg',
  'loras-tyrell.jpg',
  'mace-tyrell.jpg',
  'randyl-tarly.jpg',
  'paxter-redwyne.jpg',
  'margery-tyrell.jpg',
  'queen-of-thorns.jpg'
]);

full_units_state = {
	"arryn": "Gulltown - Port: SH, SH, SH, SH\nEyrie: FM, FM, FM, FM\nThe Vale: FM, FM, FM, FM\nBay of Crabs: SH, SH, SH, SH\nNarrow Sea: SH, SH, SH, SH\nKingsroad: FM, FM, FM, FM\nBloody Gate: FM, FM, FM, FM\nThe Fingers: FM, FM, FM, FM\nThe Twins: FM, FM, FM, FM\nGulltown: FM, FM, FM, FM",
	"baratheon": "Dragonstone: FM, FM, FM, FM\nDragonstone - port: SH, SH, SH, SH\nStorm's End: FM, FM, FM, FM\nKings Landing: FM, FM, FM, FM\nCrackclaw Point: FM, FM, FM, FM\nBitterbridge: FM, FM, FM, FM\nRainwood: FM, FM, FM, FM\nBlackwater Bay: Sh, SH, SH, SH\nShipbreaker Bay: SH, SH, SH, SH\nStorm's End - port: SH, SH, SH, SH",
	"greyjoy": "Seagard - port: SH, SH, SH, SH\nPyke: FM, FM, FM, FM\nGreywater Watch: FM, FM, FM, FM\nSeagard: FM, FM, FM, FM\nFlint's Finger: FM, FM, FM, FM\nWhispering Wood: FM, FM, FM, FM\nPyke - port: SH, SH, SH, SH\nIronman's Bay: SH, SH, SH, SH\nSunset Sea: SH, SH, SH, SH",
	"lannister": "Lannisport: FM, FM, FM, FM\nStoney Sept: FM, FM, FM, FM\nGolden Sound: SH, SH, SH, SH\nLannisport - port: SH, SH, SH, SH\nRiverrun: FM, FM, FM, FM\nSearoad Marches: FM, FM, FM, FM\nBlackwater: FM, FM, FM, FM\nHarrenhal: FM, FM, FM, FM",
	"martell": "Sunspear: FM, FM, FM, FM\nSalt Shore: FM, FM, FM, FM\nSea of Dorne: SH, SH, SH, SH\nEast Summer Sea: SH, SH, SH, SH\nSandstone: FM, FM, FM, FM\nyronwood: FM, FM, FM, FM\nNightsong: FM, FM, FM, FM\nBoneway: FM, FM, FM, FM\nLys: FM, FM, FM, FM",
	"stark": "BlazeWater Bay: SH, SH, SH\nTorrhen's Square-Port: SH, SH, SH, SH\nQueenscrown: FM, FM, FM, FM\nBarrowlands: FM, FM, FM, FM\nTorrhen's Square: FM, FM, FM, FM\nWinterfell: FM, FM, FM, FM\nBay of Ice: SH, SH, SH, SH\nDeepwood: FM, FM, FM, FM\nMoat Cailin: FM, FM, FM, FM\nCastle Black: FM, FM, FM, FM",
	"targaryen": "Pentos: FM, FM, FM, FM\nGolden Fields: FM, FM, FM, FM\nPentos - port: SH, SH, SH, SH\nSea of Myrth: SH, SH, SH, SH\nMyr: FM, FM, FM, FM\nDisputed lands: FM, FM, FM, FM\nlorath: FM, FM, FM, FM\nAndalos: FM, FM, FM, FM\nNorvos: FM, FM, FM, FM\nBraavos: FM, FM, FM, FM\nBraavos - port: SH, SH, SH, SH\nlorath - port: SH, SH, SH, SH\nBay of Rhoyne: SH, SH, SH, SH",
	"bolton": "Karhold-Harbor: SH, SH, SH, SH\nWhite Knife: FM, FM, FM, FM\nWeeping Water: FM, FM, FM, FM\nTheGift: FM, FM, FM, FM\nDreadfort: FM, FM, FM, FM\nShivering Sea: SH, SH, SH, SH\nThe Byte: SH, SH, SH, SH\nKarhold: FM, FM, FM, FM\nWhite Harbor: FM, FM, FM, FM\nWhite Harbor - port: SH, SH, SH, SH",
	"tyrell": "Highgarden: FM, FM, FM, FM\nThe Reach: FM, FM, FM, FM\nOldtown: FM, FM, FM, FM\nOldtown - port: Sh, SH, SH, SH\nDornish Marches: FM, FM, FM, FM\nThe Arbor: FM, FM, FM, FM\nRedwyne straights: SH, SH, SH, SH\nWest Summer Sea: SH, SH, SH, SH\nThree Towers: FM, FM, FM, FM"
};

default_game_json = {
    "wildlings": "0",
    "round": "7",
    "ironThroneOrder": "Martell\nStark\nTyrell\nBaratheon\nGreyjoy\nLannister\nArryn\nTargaryen\nBolton",
    "fiefdomOrder": "Lannister\nTargaryen\nTyrell\nMartell\nGreyjoy\nBolton\nStark\nArryn\nBaratheon ",
    "kingsCourtOrder": "Stark\nTargaryen\nBolton\nTyrell\nBaratheon\nMartell\nGreyjoy\nLannister\nArryn",
    "garrisons": "The Eyrie: 2\nWinterfell: 2\nCasterly Rock: 2\nHighgarden: 2\nSunspear: 2\nPyke: 2\nRiverrun: 2\nPentos: 2\nDragonstone: 2",
    "supply": "Arryn: 2\nBaratheon: 3\nGreyjoy: 3\nLannister: 2\nMartell: 3\nStark: 4\nTargaryen: 4\nBolton: 3\nTyrell: 4",
    "victory": "Arryn: 3\nBaratheon: 3\nGreyjoy: 1\nLannister: 3\nMartell: 3\nStark: 4\nTargaryen: 4\nBolton: 4\nTyrell: 3",
    "units": full_units_state,
    "orders": {
        "arryn": "Gulltown: M+0\nThe Eyrie: CP\nThe Bloody Gate: CP\nThe Kingsroad: S\nTHe Vale: S",
        "baratheon": "Dragonstone: CP\nDragonstone - port: CP\nKing's Landing: M+0\nStorm's End: M+1*\nCrackclaw Point: S\nBlackwater Bay: S+1*",
        "greyjoy": "Pyke: M-1\nPyke - Port: CP\nIronman's Bay: S",
        "lannister": "Casterly Rock: CP\nSunset Sea: M+0\nGolden Tooth: CP",
        "martell": "Sea of Dorne: s+1\nYronwood: S\nSalt Shore: S\nLys: CP\nSunspear - port: CP",
        "stark": "Castle Black: CP\nKarhold: CP\nDeepwood: CP*\nStoney Shore: M+1*\nWhite Harbor: M+0\nFlints Finger: S\nThe Byte: S+1*",
        "targaryen": "Pentos: S\nPentos - Port: M+0\nlorath: M-1\nlorath - Port: S\nMyr: CP*\nDisputed Lands: CP",
        "bolton": "Riverrun: M-1\nWhispering Wood: M+1\nStoney Sept: CP\nSeagard: S+1",
        "tyrell": "The Arbor: CP\nHighgarden: S*\nOldtown - port: CP\nThe Reach: S\nOldtown: M-1\nWest Summer Sea: S"
    },
    "powertokens": {
        "arryn": "Gulltown\nThe Vale",
        "baratheon": "Dragonstone",
        "greyjoy": "",
        "lannister": "",
        "martell": "Salt Shore\nYronwood",
        "stark": "White Harbor\nDreadfort\nDeepwood",
        "targaryen": "Golden Fields\nAndalos",
        "bolton": "Whispering Wood",
        "tyrell": "Oldtown\nThree Towers\nThe reach"
    },
    "housecards": {
        "arryn": arryn_cards,
        "baratheon": baratheon_cards,
        "greyjoy": greyjoy_cards,
        "lannister": lannister_cards,
        "martell": martell_cards,
        "stark": stark_cards,
        "targaryen": targaryen_cards,
        "bolton": bolton_cards,
        "tyrell": tyrell_cards
    },
    "housecardTracking": {
        "arryn": [false, false, false, false, false, false, false],
        "baratheon": [false, false, false, false, false, false, false],
        "greyjoy": [false, false, false, false, false, false, false],
        "lannister": [false, false, false, false, false, false, false],
        "martell": [false, false, false, false, false, false, false],
        "stark": [false, false, false, false, false, false, false],
        "targaryen": [false, false, false, false, false, false, false],
        "bolton": [false, false, false, false, false, false, false],
        "tyrell": [false, false, false, false, false, false, false]
    },
    "availablePowertokens": {
        "arryn": "5",
        "baratheon": "5",
        "greyjoy": "5",
        "lannister": "5",
        "martell": "5",
        "stark": "5",
        "targaryen": "5",
        "bolton": "5",
        "tyrell": "5"
    },
    "maxPowertokens": "20"
}
