package curso.ex1;

import java.util.ArrayList;
import java.util.List;

public class Filtrar {

    //1. FiltrarJava7
    /*public static void main(String[] args) {
        List<Maca> macasPorCor = FiltrarJava7.filtrarMacasPelaCor(conjuntoMacas(),"verde");
        List<Maca> macasPorPeso = FiltrarJava7.filtrarMacasPeloPeso(conjuntoMacas(),0.9);

        imprimir(macasPorCor, "Maçãs por cor");
        imprimir(macasPorPeso, "Maçãs por peso");
    }*/

    //2. FiltrarJava7UnicoMetodo
    /*public static void main(String[] args) {
        List<Maca> macasPorCor = FiltrarJava7UnicoMetodo.filtrarMacas(conjuntoMacas(),new FiltrarJava7UnicoMetodo.MacasCriterio() {

            @Override
            public boolean aceitar(Maca maca) {
                return maca.getCor().equals("verde");
            }
        });

        List<Maca> macasPorPeso = FiltrarJava7UnicoMetodo.filtrarMacas(conjuntoMacas(), new FiltrarJava7UnicoMetodo.MacasCriterio() {
            @Override
            public boolean aceitar(Maca maca) {
                return maca.getPeso() > 0.9;
            }
        });

        imprimir(macasPorCor, "Maçãs por cor");
        imprimir(macasPorPeso, "Maçãs por peso");
    }*/

    //3. FiltrarJava8Lambda
    public static void main(String[] args) {
        List<Maca> macasPorCor = FiltrarJava8Lambda.filtrarMacas(conjuntoMacas(), (maca -> maca.getCor().equals("verde")));
        List<Maca> macasPorPeso = FiltrarJava8Lambda.filtrarMacas(conjuntoMacas(), (maca -> maca.getPeso() > 0.9));

        FiltrarJava7.imprimir(macasPorCor, "Maçãs por cor");
        FiltrarJava7.imprimir(macasPorPeso, "Maçãs por peso");
    }



    public static List<Maca> conjuntoMacas(){
        List<Maca> conjunto = new ArrayList<>();
        conjunto.add(new Maca("amarela",1.3));
        conjunto.add(new Maca("amarela",0.5));
        conjunto.add(new Maca("verde",2.0));
        conjunto.add(new Maca("verde",0.3));
        conjunto.add(new Maca("vermelha",1.8));
        conjunto.add(new Maca("vermelha",0.6));
        return conjunto;
    }

}
