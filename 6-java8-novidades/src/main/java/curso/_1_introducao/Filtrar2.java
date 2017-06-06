package curso._1_introducao;

import java.util.ArrayList;
import java.util.List;

import static curso._1_introducao.Imprimir.imprimir;

public class Filtrar2 {

    public static void main(String[] args) {
        ConjuntoMacas macas = new ConjuntoMacas();
        List<Maca> macasPorCor = filtrarMacas(macas.todas(),new MacasCriterio() {

            @Override
            public boolean aceitar(Maca maca) {
                return maca.getCor().equals("verde");
            }
        });

        List<Maca> macasPorPeso = filtrarMacas(macas.todas(), new MacasCriterio() {
            @Override
            public boolean aceitar(Maca maca) {
                return maca.getPeso() > 0.9;
            }
        });

        imprimir(macasPorCor, "Maçãs por cor");
        imprimir(macasPorPeso, "Maçãs por peso");
    }

    public static List<Maca> filtrarMacas(List<Maca> conjunto, MacasCriterio macasCriterio) {
        List<Maca> result = new ArrayList<>();
        for (Maca maca : conjunto) {
            if (macasCriterio.aceitar(maca)) {
                result.add(maca);
            }
        }
        return result;
    }




}
