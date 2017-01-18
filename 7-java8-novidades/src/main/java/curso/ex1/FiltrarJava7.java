package curso.ex1;

import java.util.ArrayList;
import java.util.List;

public class FiltrarJava7 {

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

    public static void imprimir(List<Maca> macas, String label) {
        System.out.println(" --- " + label + " ---");
        for(Maca maca : macas) {
            System.out.println(maca);
        }
    }


}
