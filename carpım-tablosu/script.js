document.write("<TABLE>"); 
for(i=1; i<11; i++){
    document.write("<TR>"); 
    for(j=1; j<11; j++){
        var td=document.write("<TD>"+i*j+"</TD>");         
    }    
    document.write("</tr>");
    
}
document.write("</TABLE>"); 
