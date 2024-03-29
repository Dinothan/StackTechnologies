export interface Product {
  machineTypes: string[];
  manufacturers: string[];
  oems: string[];
  skualtcode: string;
  skuavailableindays: number;
  skuavailableitems: number;
  skucreated: string;
  skudescription_enGB: string | null;
  skudescription_esES: string | null;
  skudescription_frFR: string | null;
  skudescription_ptPT: string | null;
  skudescription_ruRU: string | null;
  skuenabled: boolean;
  skufeatures: string;
  skuid: number;
  skuimages: string;
  skuimageurl: string;
  skulastmodified: string;
  skuname_enGB: string;
  skuname_esES: string | null;
  skuname_frFR: string | null;
  skuname_ptPT: string | null;
  skuname_ruRU: string | null;
  skunumber: string;
  skunumbersonparts: string;
  skupath: string;
  skuprice: number;
  skuqtyonorder: number;
  skuretailprice: number;
  skushortdescription_enGB: string;
  skushortdescription_esES: string | null;
  skushortdescription_frFR: string | null;
  skushortdescription_ptPT: string | null;
  skushortdescription_ruRU: string | null;
  skuweight: number;
}
