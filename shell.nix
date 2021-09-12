with import <nixpkgs> {};

let

  nodeVersion =
    "12";

  env =
    pkgs.mkShell {
        buildInputs = [
            pkgs."nodejs-${nodeVersion}_x"
            pkgs.jq
            pkgs.websocat
        ];
    };

in env
