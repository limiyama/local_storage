// This is a JavaScript file
var valor = 0;

$(document).on("click","#salvar", function(){
  var dados = {nome: $("#nome").val(), endereco: $("#endereco").val()};
  localStorage.setItem(valor, JSON.stringify(dados));
  valor++;
});

$(document).on("click","#buscar", function(){
  var pessoa = JSON.parse(localStorage.getItem($("#identificador").val()));
  $("#nomeBusca").val(pessoa.nome);
  $("#enderecoBusca").val(pessoa.endereco);
});

$(document).on("click","#limpar", function(){
  localStorage.clear();
  limparCampos();
});

$(document).on("click","#remover", function(){
  localStorage.removeItem($("#identificador").val());
  limparCampos();
});

function limparCampos(){
  $("#nome").val("");
  $("#nomeBusca").val("");
  $("#identificador").val("");
}