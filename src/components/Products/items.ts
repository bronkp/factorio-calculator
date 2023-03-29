import { json } from "stream/consumers";
import { PerModuleNameCache } from "typescript";
import { product, productPage, Ratio } from '../product';

const useProducts = () =>{

//: product = {name:'',src:'',materials:[[]],time:,production:}
//basics
const stone:product ={name:'Stone', src:'', materials:[['stone']],time:1,production:1}
const coal: product = {name:'Coal', src:'/intermediate_products/coal.png', materials:[['coal']],time:1,production:1}
const wood: product = {name:'Wood',src:'/intermediate_products/wood.png',materials:[['wood']],time:3,production:3}
const water: product = {name:'Water', src:'/intermediate_products/water.png', materials:[['water']],time:1,production:1200}
const fish:product={name:'Fish', src:'/fish.png', materials:[['fish']], time:1,production:1}
const stone_brick: product = {name:'Stone brick', src:'/intermediate_products/stone_brick.png', materials:[['stone',2]],time:3.2,production:1}
const copper_plate:product = {name:'Copper plate', src:'/intermediate_products/copper_plate.png', materials:[['copper']], time:3.2, production:1}
const iron_plate:product={name:'Iron plate', src:'/intermediate_products/iron_plate.png', materials:[['iron']], time:3.2,production:1}
const steel_plate: product = {name:'Steel plate',src:'/intermediate_products/steel_plate.png',materials:[[iron_plate,5]],time:16,production:1}
//basic precursors
const iron_gear_wheel:product = {name:'Iron gear wheel', src:'/intermediate_products/iron_gear_wheel.png', materials:[[iron_plate,2]], time:0.5, production:1}
const copper_cable: product = {name:'Copper cable',src:'/intermediate_products/copper_cable.png',materials:[[copper_plate,1]],time:0.5,production:2}
const electronic_circuit: product = {name:'Electronic circuit',src:'/intermediate_products/electronic_circuit.png',materials:[[copper_cable,3],[iron_plate,1]],time:0.5,production:1}
const iron_stick:product = {name:'Iron stick',src:'/intermediate_products/iron_stick.png',materials:[[iron_plate,1]],time:.5,production:2}
//storage
const wooden_chest: product = {name:'Wooden chest',src:'/logistics/wooden_chest.png',materials:[[wood,2]],time:0.5,production:1}
const iron_chest:product = {name:'Iron chest',src:'/logistics/iron_chest.png',materials:[[iron_plate,8]],time:0.5,production:1}
const steel_chest: product = {name:'Steel chest',src:'/logistics/steel_chest.png',materials:[[steel_plate,8]],time:0.5,production:1}
const storage_tank: product = {name:'Storage tank',src:'/logistics/storage_tank.png',materials:[[iron_plate,20],[steel_plate,5]],time:3,production:1}
//fluid- experimental
const heavy_oil:product = {name:'Heavy oil', src:'/intermediate_products/heavy_oil.png', materials:[['oil']], time:1,production:1}
const lubricant:product = {name:'Lubricant', src:'/intermediate_products/lubricant.png', materials:[[heavy_oil,10]],time:1,production:10}
const petroleum_gas:product = {name:'Petroleum gas',src:'/intermediate_products/petroleum_gas.png',materials:[['oil',1]],time:1,production:1}
const plastic_bar:product ={name:'Plastic bar',src:'/intermediate_products/plastic_bar.png',materials:[['coal',1],[petroleum_gas, 20]],time:1,production:2}
const pipe:product = {name:'Pipe', src:'/logistics/pipe.png', materials:[[iron_plate,1]],time:1,production:1}
const underground_pipe: product = {name:'Underground pipe',src:'/logistics/underground_pipe.png',materials:[[iron_plate,5],[pipe,10]],time:.5,production:2}
const sulfur:product = {name:'Sulfur', src:'/intermediate_products/sulfur.png', materials:[[petroleum_gas,30],[water,30]],time:1,production:2}
const sulfuric_acid:product = {name:'Sulfuric acid', src:'/intermediate_products/sulfuric_acid.png', materials:[[iron_plate,1],[sulfur,5],[water,100]],time:1,production:50}

//advanced precursors
const advanced_circuit: product= {name:'Advanced circuit', src:'/intermediate_products/advanced_circuit.png', materials:[[copper_cable,4],[electronic_circuit,2],[plastic_bar, 2]],time:6,production:1}
const engine_unit:product={name:'Engine unit', src:'/intermediate_products/engine_unit.png', materials:[[iron_gear_wheel, 1],[pipe,2],[steel_plate,1]],time:10,production:1}
const processing_unit:product = {name:'Processing unit', src:'/intermediate_products/processing_unit.png', materials:[[advanced_circuit,2],[electronic_circuit,20],[sulfuric_acid,5]],time:10,production:1}
const electric_engine_unit:product = {name:'Electric engine unit', src:'/intermediate_products/electric_engine_unit.png', materials:[[engine_unit,1],[lubricant,15],[electronic_circuit,2]],time:10,production:1}
const low_density_structure:product={name:'Low density structure',src:'/intermediate_products/low_density_structure.png',materials:[[copper_plate,20],[plastic_bar,5],[steel_plate,2]],time:20,production:1}
const battery:product={name:'Battery', src:'/intermediate_products/battery.png', materials:[[copper_plate,1],[iron_plate,1],[sulfuric_acid,20]],time:4,production:1}
//smelters
const stone_furnace : product = {name:'Stone furnace', src:'/production/stone_furnace.png', materials:[['stone',5]],time:.5,production:1}
const steel_furnace: product = {name:'Steel furnace', src:'/production/steel_furnace.png', materials:[[steel_plate,6],[stone_brick,10]],time:3, production:1}
const electric_furnace: product = {name:'Electric furnace',src:'/production/electric_furnace.png',materials:[[advanced_circuit,5],[steel_plate,10],[stone_brick,10]],time:5,production:1}

//power
const solar_panel: product = {name:'Solar panel',src:'/production/solar_panel.png',materials:[[copper_plate,5],[electronic_circuit,15],[steel_plate,5]],time:10,production:1}



//modules
const speed_module:product = {name:'Speed module', src:'/production/speed_module.png', materials:[[advanced_circuit,5],[electronic_circuit,5]],time:15,production:1}
const efficiency_module:product = {name:'Efficiency module', src:'/production/efficiency_module.png', materials:[[advanced_circuit,5],[electronic_circuit,5]],time:15,production:1}
const efficiency_module_2:product = {name:'Efficiency module 2', src:'/production/efficiency_module_2.png', materials:[[advanced_circuit,5],[efficiency_module,4],[processing_unit,5]],time:30,production:1}
const efficiency_module_3:product = {name:'Efficiency module 3', src:'/production/efficiency_module_3.png', materials:[[advanced_circuit,5],[processing_unit,5],[efficiency_module_2,5]],time:60,production:1}
const productivity_module:product = {name:'Productivity module', src:'/production/productivity_module.png', materials:[[advanced_circuit,5],[electronic_circuit,5]],time:15,production:1}


const rocket_control_unit:product={name:'Rocket control unit', src:'/intermediate_products/rocket_control_unit.png', materials:[[processing_unit,1],[speed_module,1]],time:30,production:1}

//assemblers
const assembling_machine_1: product = {name:'Assembling machine 1', src:'/production/assembling_machine_1.png', materials:[[electronic_circuit,3],[iron_gear_wheel,5],[iron_plate,9]],time:0.5,production:1}
const assembling_machine_2:product = {name:'Assembling machine 2', src:'/production/assembling_machine_2.png',materials:[[electronic_circuit,3],[assembling_machine_1,1],[iron_gear_wheel,5],[steel_plate,2]],time:.5,production:1}
const assembling_machine_3:product = {name:'Assembling machine 3', src:'/production/assembling_machine_3.png',materials:[[assembling_machine_2,2],[speed_module,4]],time:.5,production:1}

//power distribution
const small_electric_pole:product = {name:'Small electric pole', src:'/logistics/small_electric_pole.png',materials:[[copper_cable,2],[wood,1]],time:.5, production:2}
const medium_electric_pole:product={name:'Medium electric pole', src:'/logistics/medium_electric_pole.png', materials:[[copper_plate,2],[iron_stick,4],[steel_plate,2]],time:.5,production:1}
const big_electric_pole:product={name:'Big electric pole', src:'/logistics/big_electric_pole.png', materials:[[copper_plate,5],[iron_stick,8],[steel_plate,5]],time:.5,production:1}
const substation:product={name:'Substation', src:'/logistics/substation.png', materials:[[copper_plate,5],[advanced_circuit,5],[steel_plate,10]],time:.5,production:1}


//belts
const transport_belt:product = {name:'Transport belt', src:'/logistics/transport_belt.png',materials:[[iron_plate,1],[iron_gear_wheel,1]], time:0.5,production:2}
const underground_belt:product = {name:'Underground belt', src:'/logistics/underground_belt.png', materials:[[iron_plate,10],[transport_belt,5]],time:1,production:2}
const splitter:product= {name:'Splitter', src:'/logistics/splitter.png', materials:[[electronic_circuit,5],[iron_plate,5],[transport_belt,4]],time:1,production:1}
const fast_splitter: product = {name:'Fast splitter',src:'/logistics/fast_splitter.png',materials:[[electronic_circuit,10],[iron_gear_wheel,10],[splitter,1]],time:2,production:1}
const fast_transport_belt: product = {name:'Fast transport belt',src:'/logistics/fast_transport_belt.png',materials:[[iron_gear_wheel,5],[transport_belt,1]],time:0.5,production:1}
const fast_underground_belt:product = {name:'Fast underground belt', src:'/logistics/fast_underground_belt.png',materials:[[iron_gear_wheel,40],[underground_belt,2]],time:2,production:2}
const express_underground_belt:product = {name:'Express underground belt', src:'/logistics/express_underground_belt.png',materials:[[fast_underground_belt,2],[iron_gear_wheel,80],[lubricant,40]],time:2,production:2}
const express_transport_belt:product = {name:'Express transport belt', src:'/logistics/express_transport_belt.png', materials:[[fast_transport_belt,1],[iron_gear_wheel,10],[lubricant,20]],time:.5,production:1}
const express_splitter: product = {name:'Express splitter',src:'/logistics/express_splitter.png',materials:[[advanced_circuit,10],[fast_splitter,1],[iron_gear_wheel,10],[lubricant,80]],time:2,production:1}
//inserters
const burner_inserter:product= {name:'Burner inserter', src:'/logistics/burner_inserter.png',materials:[[iron_gear_wheel,1],[iron_plate,1]],time:.5,production:1}
const inserter:product={name:'Inserter', src:'/logistics/inserter.png',materials:[[electronic_circuit,1],[iron_gear_wheel,1],[iron_plate,1]],time:.5,production:1}
const long_handed_inserter:product={name:'Long-handed inserter',src:'/logistics/long-handed_inserter.png',materials:[[inserter,1],[iron_gear_wheel,1],[iron_plate,1]],time:.5,production:1}
const fast_inserter:product={name:'Fast inserter', src:'/logistics/fast_inserter.png', materials:[[electronic_circuit,2],[inserter,1],[iron_plate,2]], time:.5,production:1}
const filter_inserter:product={name:'Filtered inserter',src:'/logistics/filter_inserter.png',materials:[[electronic_circuit,4],[fast_inserter,1]],time:0.5,production:1}
const stack_inserter:product={name:'Stack inserter', src:'/logistics/stack_inserter.png', materials:[[advanced_circuit,1],[electronic_circuit,15],[fast_inserter,1],[iron_gear_wheel,15]],time:.5,production:1}
const stack_filter_inserter:product={name:'Stack filter inserter', src:'/logistics/stack_filter_inserter.png',materials:[[electronic_circuit,5],[stack_inserter,1]],time:.5,production:1}

//fluid processing

const pump:product={name:'Pump', src:'/logistics/pump.png', materials:[[pipe,1],[engine_unit,1],[steel_plate,1]],time:2,production:1}

const chemical_plant:product = {name:'Chemical plant', src:'/production/chemical_plant.png',materials:[[electronic_circuit,5],[iron_gear_wheel,5],[pipe,5],[steel_plate,5]],time:5,production:1}
const oil_refinery: product = {name:'Oil refinery', src:'/production/oil_refinery.png', materials:[[electronic_circuit,10],[iron_gear_wheel,10],[pipe,10],[steel_plate,15],[stone_brick,10]],time:8,production:1}

//trains
const rail: product = {name:'Rail', src:'/logistics/rail.png', materials:[[iron_stick,1],[stone,1],[steel_plate,1]],time:.5,production:2}
const train_stop: product = {name:'Train stop', src:'/logistics/train_stop.png', materials:[[electronic_circuit,5],[iron_plate,6],[iron_stick,6],[steel_plate,3]],time:.5,production:1}
const rail_signal: product = {name:'Rail signal', src:'/logistics/rail_signal.png', materials:[[electronic_circuit,1],[iron_plate,5]],time:.5,production:1}
const rail_chain_signal: product = {name:'Rail chain signal', src:'/logistics/rail_chain_signal.png', materials:[[electronic_circuit,1],[iron_plate,5]],time:.5,production:1}
const locomotive: product = {name:'Locomotive', src:'/logistics/locomotive.png', materials:[[electronic_circuit,10],[engine_unit,20],[steel_plate,30]],time:4,production:1}
const cargo_wagon: product = {name:'Cargo wagon', src:'/logistics/cargo_wagon.png', materials:[[steel_plate,20],[iron_plate,20],[iron_gear_wheel,10]],time:1,production:1}
const fluid_wagon: product = {name:'Fluid wagon', src:'/logistics/fluid_wagon.png', materials:[[storage_tank,1],[pipe,8],[steel_plate,16],[iron_gear_wheel,10]],time:1.5,production:1}
const artillery_wagon: product = {name:'Artillery wagon', src:'/logistics/artillery_wagon.png', materials:[[steel_plate,40],[pipe,16],[advanced_circuit,20],[engine_unit,64],[iron_gear_wheel,10]],time:4,production:1}
//gear
const exoskeleton:product={name:'Exoskeleton', src:'/combat/exoskeleton.png',materials:[[processing_unit,10],[steel_plate,20],[electric_engine_unit,30]],time:10,production:1}
const portable_fusion_reactor:product={name:'Portable fusion reactor', src:'/combat/portable_fusion_reactor.png', materials:[[low_density_structure,50],[processing_unit,200]],time:10,production:1}
//defense
const radar:product={name:'Radar', src:'/combat/radar.png', materials:[[electronic_circuit,5],[iron_gear_wheel,5],[iron_plate,10]],time:0.5,production:1}
const rocket_launcher:product={name:'Rocket launcher', src:'/combat/rocket_launcher.png',materials:[[electronic_circuit,5],[iron_gear_wheel,5],[iron_plate,5]],time:10,production:1}
const firearm_magazine:product = {name:'Firearm magazine', src:'/combat/firearm_magazine.png',materials:[[iron_plate,4]],time:1,production:1}
const piercing_rounds_magazine:product ={name:'Piercing round magazine', src:'/combat/piercing_rounds_magazine.png', materials:[[copper_plate,5],[firearm_magazine,1],[steel_plate,1]],time:3,production:1}
const grenade:product={name:'Grenade', src:'/combat/grenade.png', materials:[[coal,10],[iron_plate,5]],time:8,production:1}
const wall:product = {name:'Wall', src:'/combat/wall.png', materials:[[stone_brick,5]], time:0.5,production:1}
const gun_turret:product = {name:'Gun turret', src:'/combat/gun_turret.png', materials:[[copper_plate,10],[iron_gear_wheel,10],[iron_plate,20]],time:8,production:1}
const flying_robot_frame:product = {name:'Flying robot frame', src:'/intermediate_products/flying_robot_frame.png', materials:[[battery,2],[electric_engine_unit,1],[electronic_circuit,3],[steel_plate,1]],time:20,production:1}
//vehicles 
const car: product = {name:'Car', src:'/logistics/car.png', materials:[[steel_plate,5],[iron_plate,20],[engine_unit,8]],time:2,production:1}
const tank: product = {name:'Tank', src:'/logistics/tank.png', materials:[[steel_plate,50],[engine_unit,32],[iron_gear_wheel,15],[advanced_circuit,10]],time:5,production:1}
const spidertron: product = {name:'Spidertron', src:'/logistics/spidertron.png', materials:[[efficiency_module_3,2],[exoskeleton,4],[rocket_launcher,4],[low_density_structure,150],[rocket_control_unit,16],[portable_fusion_reactor,2],[fish,1], [radar,2]],time:10,production:1}

//science packs
const red_pack:product = {name:'Automation science pack', src:'/intermediate_products/automation_science_pack.png', materials:[[copper_plate,1],[iron_gear_wheel,1]],time:5,production:1}
const green_pack:product = {name:'Logistic science pack', src:'/intermediate_products/logistic_science_pack.png', materials:[[inserter,1],[transport_belt,1]],time:6,production:1}
const black_pack:product = {name:'Military science pack', src:'/intermediate_products/military_science_pack.png',materials:[[piercing_rounds_magazine,1],[grenade,1],[wall,2]],time:10,production:2}
const blue_pack:product = {name:'Chemical science pack', src:'/intermediate_products/chemical_science_pack.png', materials:[[sulfur,1],[advanced_circuit,3],[engine_unit,2]],time:24,production:2}
const purple_pack:product = {name:'Production science pack', src:'/intermediate_products/production_science_pack.png',materials:[[rail,30],[electric_furnace,1],[productivity_module,1]],time:21,production:3}
const yellow_pack:product = {name:'Utility science pack', src:'/intermediate_products/utility_science_pack.png', materials:[[processing_unit,2],[flying_robot_frame,1],[low_density_structure,3]],time:21,production:3}

//category arrays
const smelts = ["Copper plate", "Iron plate", 'Steel plate'];
const assemblers = [assembling_machine_1,assembling_machine_2,assembling_machine_3]
const oils=['Heavy oil','Petroleum gas']
const chemicals = ['Lubricant', 'Sulfur', 'Sulfuric acid']
const smelters = [stone_furnace, steel_furnace,electric_furnace]

const ratios: Ratio[] = []

//gets the product as type product and the goal of production
const getProduction=(product:product,production_goal:number,)=>{
   // console.log(product.name, 'pgoalproducttime',production_goal,product.production,product.time, (production_goal/(product.production/product.time), product.materials) )
    let producer = smelts.includes(product.name)? smelters[0]: chemicals.includes(product.name)? chemical_plant: assemblers[0]
    
    if(ratios.filter(e=>e.name===product.name).length>0){
      let index  = ratios.map((e)=>{return e.name}).indexOf(product.name)
      ratios[index] ={name :product.name, producers:ratios[index].producers+(production_goal/(product.production/product.time)), src:product.src, goal:ratios[index].goal+production_goal, producer_type:producer}
    }else{
ratios.push({name :product.name, producers:(production_goal/(product.production/product.time)), src:product.src, goal:production_goal, producer_type:producer})}      
    product.materials.map((material, index)=>{
    if(typeof material[index] != 'string'){
    //loops through for each material to get its individual production requirment 
                                //material[1] is the required ammount of the precursor
                                //this is then mutiplied by its production goal divided 
                                //by that producers production of its type  
    getProduction(material[0],material[1]*(production_goal/product.production))}
    else{console.log(material[0])}})
}
const setProduction = (product:product,production_goal:number)=>{
    
    //sets up product tab to later be pushed to local storage
    
    getProduction(product,production_goal)
    const productInfo:productPage= {name:product.name, src:product.src,  ratios: ratios}
    localStorage.setItem('products',JSON.stringify(JSON.parse(localStorage.getItem('products')!).concat([productInfo])))
   
}

//definition of item categories for new recipe page
//category is an array with each child array being a row in the category
const logistics = [
                    [wooden_chest,iron_chest,steel_chest,storage_tank],
                    [transport_belt,fast_transport_belt, express_transport_belt,underground_belt,fast_underground_belt, express_underground_belt, splitter,fast_splitter,express_splitter],
                    [burner_inserter,inserter, long_handed_inserter,fast_inserter,filter_inserter,stack_inserter,stack_filter_inserter],
                    [small_electric_pole,medium_electric_pole, big_electric_pole,substation, pipe, underground_pipe,pump],
                    [rail,train_stop,rail_signal,rail_chain_signal,locomotive,cargo_wagon,fluid_wagon,artillery_wagon],
                    [car,tank,spidertron],
                    [stone_brick,]
                ]

const precursors = [
                    [heavy_oil, lubricant,petroleum_gas,sulfuric_acid],
                    [iron_plate,copper_plate,steel_plate,plastic_bar,sulfur,battery],
                    [copper_cable,iron_stick,iron_gear_wheel,electronic_circuit, advanced_circuit,processing_unit, engine_unit, electric_engine_unit,flying_robot_frame, rocket_control_unit,low_density_structure],
                    [red_pack,green_pack, black_pack, blue_pack, purple_pack,yellow_pack],
                ]
const production = [
                    [solar_panel, ],
                    smelters,
                    assemblers,
                    [speed_module,efficiency_module,efficiency_module_2,efficiency_module_3, productivity_module]]
const combat = [
                [rocket_launcher,],
                [ firearm_magazine,piercing_rounds_magazine,],
                [grenade],
                [portable_fusion_reactor, exoskeleton,],
                [wall,gun_turret, radar,]
            ]


const materials =[{list:logistics,name:'Logistics'},{list:production,name:'Production'},{list:precursors,name:'Intermediate Products'},{list:combat,name:'Combat'}]
return{getProduction,materials,logistics, precursors,setProduction,production, smelters,smelts,assemblers, chemicals, oils, oil_refinery}}
export default useProducts