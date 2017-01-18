package curso.ex1;

import java.util.ArrayList;
import java.util.List;

public class FiltrarJava7UnicoMetodo {

    public interface MacasCriterio {
        boolean aceitar(Maca maca);
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

    public static void imprimir(List<Maca> macas, String label) {
        System.out.println(" --- " + label + " ---");
        for(Maca maca : macas) {
            System.out.println(maca);
        }
    }


}
