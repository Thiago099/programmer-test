import build_tree from './build_tree/build_tree';

try{
    console.log(
        build_tree("[A,B] [A,C] [B,D] [D,C]")
    )
}
catch(e)
{
    console.log(e);
}
