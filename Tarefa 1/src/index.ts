import build_tree from './build_tree/build_tree';

try{
    console.log(
        build_tree("[A,B] [A,C] [C,A]")
    )
}
catch(e)
{
    console.log(e);
}
