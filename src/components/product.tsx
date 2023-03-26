export interface product {
    ratios?: any;
    name: string;
    src: string;
    materials: any[][];
    time: number;
    production: number;
}
export interface productPage {
    name: string;
    src: string;
    ratios: { name: string; producers: number; src: string; goal: number; }[];
}
export interface Ratio  {
    name: string;
     producers: number; src: string; goal: number; producer_type:product 

}