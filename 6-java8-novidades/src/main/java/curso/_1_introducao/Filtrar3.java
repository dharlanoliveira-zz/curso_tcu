package curso._1_introducao;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import static curso._1_introducao.Imprimir.imprimir;

public class Filtrar3 {

    public static void main(String[] args) {
        ConjuntoMacas macas = new ConjuntoMacas();
        List<Maca> macasPorCor = filtrarMacas(macas.todas(), (maca -> maca.getCor().equals("verde")));
        List<Maca> macasPorPeso = filtrarMacas(macas.todas(), (maca -> maca.getPeso() > 0.9));

        imprimir(macasPorCor, "Maçãs por cor");
        imprimir(macasPorPeso, "Maçãs por peso");
    }



    public static List<Maca> filtrarMacas(List<Maca> conjunto, Predicate<Maca> predicado) {
        return conjunto.stream()
                .filter((m) -> predicado.test(m))
                //.filter(predicado::test)
                .collect(Collectors.toList());
    }


}
