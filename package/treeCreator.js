import treeGraphFactory from './treeGraphFactory';
import deleteParent from './deleteParent';

// let prevTreeGraph = null;
export default function treeCreator(hostRoot, treeGraph = null) {

    // 1.) create treeGraph
    if (hostRoot.child) {
      // recursively traverse App Fiber Tree and create treeGraph
      treeGraph = treeGraphFactory(hostRoot.child);
    }
  
    // 2.) prune treeGraph
    deleteParent(treeGraph);
    delete treeGraph.parent;
    console.log("treeGraph after delete =", treeGraph);
  
    // 3.) enhance treeGraph 
    // by comparing state and props in prevTreeGraph and treeGraph(current)
    // const tempTreeGraph = JSON.parse(JSON.stringify(treeGraph));
    // compareStateAndProps(treeGraph, prevTreeGraph, null);
    // prevTreeGraph = tempTreeGraph;
    // wasMounted = true;
  
  
    return treeGraph;
  
  }