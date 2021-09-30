with import <nixpkgs> {};

let

  nodeVersion =
    "16";

  env =
    pkgs.mkShell {
        buildInputs = [
            pkgs."nodejs-${nodeVersion}_x"
            pkgs.jq
            pkgs.websocat
        ];
    };

in env
