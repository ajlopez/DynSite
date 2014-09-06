<# 
    parts.forEach(function (part) {
        var type = part.type || 'text'; 
        var text = render('part-' + type, { part: part }); #>
${text}        
<#
    });
#>