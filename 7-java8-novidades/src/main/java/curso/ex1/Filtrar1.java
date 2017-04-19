package curso.ex1;

import java.util.ArrayList;
import java.util.List;

import static curso.ex1.Imprimir.imprimir;

public class Filtrar1 {

    public static void main(String[] args) {
        ConjuntoMacas macas = new ConjuntoMacas();
        List<Maca> macasPorCor = filtrarMacasPelaCor(macas.todas(),"verde");
        List<Maca> macasPorPeso = filtrarMacasPeloPeso(macas.todas(),0.9);

        imprimir(macasPorCor, "Maçãs por cor");
        imprimir(macasPorPeso, "Maçãs por peso");
    }

    public static List<Maca> filtrarMacasPeloPeso(List<Maca> conjunto, double peso) {
        List<Maca> result = new ArrayList<>();
        for (Maca maca : conjunto) {
            if (maca.getPeso() > peso) {
                result.add(maca);
            }
        }
        return result;
    }

    public static List<Maca> filtrarMacasPelaCor(List<Maca> conjunto, String cor) {
        List<Maca> result = new ArrayList<>();
        for (Maca maca : conjunto) {
            if (maca.getCor().equals(cor)) {
                result.add(maca);
            }
        }
        return result;
    }


}
