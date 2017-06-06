package curso._4_exercicio;


import org.apache.commons.lang3.tuple.ImmutablePair;
import org.apache.commons.lang3.tuple.Pair;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Comparator;
import java.util.stream.Stream;

import static java.util.Comparator.comparing;

public class Exercicio {


    public static void main(String[] args) {
        //Código aqui
    }


    public static Stream<String> arquivo() {
        try{
            Stream<String> stream = Files.lines(
                    Paths.get(ClassLoader.getSystemClassLoader().getResource("nomes.txt").toURI()));
            return stream;
        } catch (IOException e){
            e.printStackTrace();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        return null;
    }
}
