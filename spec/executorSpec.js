require('shelljs/global');

describe("Executor watching file", function() 
{
 it("should throw an error when too many args", function() 
 {
    expect(exec('executor').code).not.toBe(0);    
 }); 

 it("should throw an error when command is unknown", function() 
 {
    set('-e');
    expect(error('executor blabla.ss')).toBeFalsy();    
 }); 

});