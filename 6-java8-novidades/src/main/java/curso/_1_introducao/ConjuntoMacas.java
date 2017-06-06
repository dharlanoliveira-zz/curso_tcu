package curso._1_introducao;

import java.util.ArrayList;
import java.util.List;

public class ConjuntoMacas {

    private List<Maca> macas = new ArrayList<>();

    public ConjuntoMacas() {
        macas.add(new Maca("amarela",1.3));
        macas.add(new Maca("amarela",0.5));
        macas.add(new Maca("verde",2.0));
        macas.add(new Maca("verde",0.3));
        macas.add(new Maca("vermelha",1.8));
        macas.add(new Maca("vermelha",0.6));
    }

    public List<Maca> todas(){
        return macas;
    }

}
