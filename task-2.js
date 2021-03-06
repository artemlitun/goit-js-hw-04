
const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
        console.log(`Adding ${itemName} to inventory`)
      this.items.push(itemName);
    },
    remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
      this.items = this.items.filter(item => item !== itemName);
    },
  };
  
  const invokeInventoryOperation = function(itemName, inventoryAction) {
    console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
    inventoryAction.call(inventory, itemName);
  };
  
  invokeInventoryOperation('Medkit', inventory.add);
//   Invoking add opeartion on Medkit
  
  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
  invokeInventoryOperation('Gas mask', inventory.remove);
//   // Invoking remove opeartion on Gas mask
  
  console.log(inventory.items); // ['Knife', 'Medkit']